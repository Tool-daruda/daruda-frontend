/** @jsxImportSource @emotion/react */
import theme from '@styles/theme';

export default {
  title: 'colors/Colors',
};

// theme에서 colors를 불러와 동기화
const colors = theme.colors;

// 🔹 색상 그룹 자동 분류
const colorGroups: Record<string, string[]> = {
  sys: Object.keys(colors).filter((key) => ['sys'].some((prefix) => key.startsWith(prefix))),
  iris: Object.keys(colors).filter((key) => ['iris'].some((prefix) => key.startsWith(prefix))),
  orange: Object.keys(colors).filter((key) => ['orange'].some((prefix) => key.startsWith(prefix))),
  neutral: Object.keys(colors).filter((key) => ['black', 'white'].some((prefix) => key.startsWith(prefix))),
  grayscale: Object.keys(colors).filter((key) => ['gray'].some((prefix) => key.startsWith(prefix))),
  shadow: Object.keys(colors).filter((key) => ['shadow'].some((prefix) => key.startsWith(prefix))),
  gradients: Object.keys(colors).filter((key) => ['linear', 'gradient'].some((prefix) => key.startsWith(prefix))),
  kakao: Object.keys(colors).filter((key) => ['kakao'].some((prefix) => key.startsWith(prefix))),
};

// 그룹에 포함된 모든 색상들을 Set으로 저장
const categorizedColors = new Set(Object.values(colorGroups).flat());
// `colorsGroup`에 있는 키들도 제외
const colorGroupKeys = new Set(Object.keys(colorGroups).flat());

// 나머지 색상들을 `etc` 그룹에 추가
colorGroups.etc = Object.keys(colors).filter((key) => !categorizedColors.has(key) && !colorGroupKeys.has(key));

export const Introduction = {
  render: () => {
    const renderColorChips = (colorKeys: string[]) => {
      return colorKeys?.map((colorName) => (
        <a
          key={colorName}
          title={`${colorName} (${colors[colorName as keyof typeof colors]})`}
          style={{
            background: colors[colorName as keyof typeof colors],
            width: '80px',
            height: '80px',
            display: 'inline-block',
            margin: '10px',
            borderRadius: '20px',
            textAlign: 'center',
            lineHeight: '40px',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
            border: '2px solid #fff',
          }}
          href="/"
        />
      ));
    };

    return (
      <div
        className="colors-wrap"
        style={{
          backgroundColor: '#000',
          padding: '20px',
          color: '#FFFFFF',
        }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>📣 마우스를 올려서 이름과 코드를 확인하세요</h2>

        {Object.entries(colorGroups).map(([groupName, colorKeys]) => (
          <div key={groupName}>
            <h4 style={{ fontSize: '24px' }}>{groupName.charAt(0).toUpperCase() + groupName.slice(1)} Colors</h4>
            <div className="colors-group">
              {colorKeys.length > 0 ? (
                renderColorChips(colorKeys)
              ) : (
                <a href="/" title="해당하는 컬러가 없습니다">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBWGmYBsd6lTdFihQRaKbIrgP3GH5Pbbqrw&s"
                    alt="No colors available"
                    style={{
                      width: '80px',
                      height: '80px',
                      display: 'inline-block',
                      margin: '10px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      lineHeight: '40px',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      border: '2px solid #fff',
                    }}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
