import axios from 'axios';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

import { slug_to_id } from '../src/constants/slugMap.js';

config();

const API_BASE_URL = process.env.NODE_API_BASE_URL || process.env.VITE_API_BASE_URL;
if (!API_BASE_URL) {
  console.error('Error: API_BASE_URL 환경 변수가 없습니다.');
  process.exit(1);
}

const fetchToolDetail = async (toolId: number) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/tool/${toolId}`);
    return res.data?.data;
  } catch (err) {
    console.warn(`Error: 툴 ID ${toolId} 상세 정보 요청 실패`, err);
    return null;
  }
};

const main = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://daruda.site' });

  // 정적 페이지
  sitemap.write({ url: '/', priority: 0.8, changefreq: 'weekly' });
  sitemap.write({ url: '/community', priority: 0.8, changefreq: 'weekly' });

  // 툴 상세 페이지
  for (const [slug, toolId] of Object.entries(slug_to_id)) {
    const detail = await fetchToolDetail(toolId);

    if (!detail) continue;

    const lastmod = detail.updatedAt ? new Date(detail.updatedAt).toISOString() : new Date().toISOString();

    sitemap.write({
      url: `/toollist/${slug}`,
      lastmod,
      changefreq: 'weekly',
      priority: 1.0,
    });
  }

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  const outputPath = resolve('public/sitemap.xml');
  writeFileSync(outputPath, xml.toString(), 'utf8');

  console.log('sitemap.xml 생성 완료');
  console.log(`위치: ${outputPath}`);
};

main();
