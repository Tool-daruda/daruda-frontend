import axios from 'axios';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { toSlug } from '../src/utils/toSlug.js';

// ESM에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 환경 변수 로드
config();

// unhandledRejection 처리
process.on('unhandledRejection', (reason, promise) => {
  console.error('Error: Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

const API_BASE_URL = process.env.NODE_API_BASE_URL || process.env.VITE_API_BASE_URL;

console.log(`.env 파일에서 읽은 API_BASE_URL: ${API_BASE_URL}`);

if (!API_BASE_URL) {
  console.error(
    'ERROR: 환경 변수 (NODE_API_BASE_URL 또는 VITE_API_BASE_URL)가 .env에 설정되지 않았습니다. 스크립트를 중단합니다.',
  );
  process.exit(1);
}

const main = async () => {
  try {
    let allTools = [];
    let currentCursor = null;
    const PAGE_SIZE = 50;
    const MAX_PAGES = 1000;
    let pageCount = 0;
    let totalExpectedElements = 0;

    console.log('모든 툴 목록 조회를 위해 무한 스크롤 API 호출 시작...');

    while (pageCount < MAX_PAGES) {
      pageCount++;
      let url = `${API_BASE_URL}/tool?size=${PAGE_SIZE}&isFree=false`;
      if (currentCursor !== null) {
        url += `&lastToolId=${currentCursor}`;
      }
      console.log(`페이지 ${pageCount} 호출: ${url}`);

      try {
        const response = await axios.get(url, {
          timeout: 10000,
          headers: {
            'User-Agent': 'DARUDA-Build-Script/1.0',
            Accept: 'application/json',
          },
        });

        const responseData = response.data?.data;
        if (!responseData) {
          throw new Error('API 응답에 data 필드가 없습니다.');
        }

        const currentPageTools = responseData.tools;
        const scrollpaginationdto = responseData.scrollPaginationDto || {};

        if (!Array.isArray(currentPageTools)) {
          console.error('Error: API 응답의 data.tools가 배열이 아닙니다:', JSON.stringify(response.data, null, 2));
          throw new Error('API response.data.tools is not an array.');
        }

        if (currentPageTools.length === 0) {
          console.log('--현재 페이지에 더 이상 툴이 없습니다.--');
          break;
        }

        allTools = allTools.concat(currentPageTools);

        currentCursor = scrollpaginationdto.nextCursor || null;
        totalExpectedElements = scrollpaginationdto.totalElements || 0;

        console.log(
          `현재까지 ${allTools.length}개 툴 수집. 다음 커서: ${currentCursor}, 총 예상 개수: ${totalExpectedElements}`,
        );

        if (currentCursor === null || allTools.length >= totalExpectedElements) {
          console.log('더 이상 가져올 툴이 없거나, 모든 툴 조회 완료.');
          break;
        }

        // API 호출 간격 (Rate Limiting 방지)
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error: 페이지 ${pageCount} 호출 실패:`, error.message);
        if (axios.isAxiosError && axios.isAxiosError(error)) {
          console.error('Status:', error.response?.status);
          console.error('Data:', error.response?.data);
        }
        throw error;
      }
    }

    console.log(`--------------\n총 ${allTools.length}개의 툴 데이터를 수집했습니다.`);

    // slugMap 생성
    const slugMap = {};
    const duplicateCheck = new Set();

    allTools.forEach((tool) => {
      if (tool.toolName && tool.toolId !== undefined) {
        const slug = toSlug(tool.toolName);

        if (duplicateCheck.has(slug)) {
          console.warn(`Warn: 중복 slug "${slug}" 발견. ID ${slugMap[slug]} 대신 ID ${tool.toolId}로 덮어씌움.`);
        }

        slugMap[slug] = tool.toolId;
        duplicateCheck.add(slug);
      } else {
        console.warn(`Warn: toolName 또는 toolId 누락된 데이터 건너뜀:`, JSON.stringify(tool));
      }
    });

    console.log(`생성된 slug 개수: ${Object.keys(slugMap).length}`);

    const content = `// Auto-generated slug to ID mapping
// Generated at: ${new Date().toISOString()}
// Total tools: ${allTools.length}

export const slug_to_id = ${JSON.stringify(slugMap, null, 2)} as const;

export type ToolSlug = keyof typeof slug_to_id;
`;

    const outputPath = resolve(__dirname, '../src/constants/slugMap.ts');
    writeFileSync(outputPath, content, 'utf8');

    console.log(`--------------\nslugMap.ts 생성 완료!`);
    console.log(`저장 위치: ${outputPath}`);

    // 생성된 내용 일부 미리보기
    const slugEntries = Object.entries(slugMap).slice(0, 5);
    console.log('생성된 매핑 미리보기:');
    slugEntries.forEach(([slug, id]) => {
      console.log(`  "${slug}": ${id}`);
    });

    if (Object.keys(slugMap).length > 5) {
      console.log(`  ... 그 외 ${Object.keys(slugMap).length - 5}개 더`);
    }
  } catch (error) {
    console.error('Error: slugMap.ts 생성 실패!');
    console.error('Error:', error.message);
    console.error('Stack trace:', error.stack);

    // 실패 시 빈 매핑 파일 생성
    const fallbackContent = `// Fallback slug mapping (generation failed)
// Generated at: ${new Date().toISOString()}

export const slug_to_id = {} as const;

export type ToolSlug = keyof typeof slug_to_id;
`;

    const outputPath = resolve(__dirname, '../src/constants/slugMap.ts');
    writeFileSync(outputPath, fallbackContent, 'utf8');

    console.log('빈 매핑 파일을 생성했습니다.');
    process.exit(1);
  }
};

main();
