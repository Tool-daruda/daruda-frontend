export default {
  title: 'colors/Colors',
};

type ColorKey =
  | 'iris1'
  | 'iris2'
  | 'orange1'
  | 'orange2'
  | 'sys_red'
  | 'sys_green'
  | 'black'
  | 'white1'
  | 'white2'
  | 'white1_hover'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4';

type ColorGroup = 'primary' | 'neutral' | 'grayscale';

const colors: Record<ColorKey, string> = {
  iris1: '#4D4ECD',
  iris2: '#B9B9F6',
  orange1: '#F77B1B',
  orange2: '#FFD3B1',
  sys_red: '#F21C00',
  sys_green: '#40C927',
  black: '#212121',
  white1: '#FFFFFF',
  white2: '#F5F5F5',
  white1_hover: 'rgba(255, 255, 255, 0.4)',
  gray1: '#565959',
  gray2: '#848688',
  gray3: '#CCCCCC',
  gray4: '#F0F2F2',
};

const colorGroups: Record<ColorGroup, string[]> = {
  primary: ['iris', 'orange', 'sys_red', 'sys_green'],
  neutral: ['black', 'white'],
  grayscale: ['gray'],
};

export const Introduction = {
  render: () => {
    const renderColorChips = (groupKey: string[]) => {
      const groupColors = Object.keys(colors).filter((key) => groupKey.some((g) => key.startsWith(g))) as ColorKey[];

      return groupColors.map((colorName) => (
        <a
          key={colorName}
          title={`${colorName} (${colors[colorName]})`}
          style={{
            background: colors[colorName],
            width: '80px',
            height: '80px',
            display: 'inline-block',
            margin: '5px',
            borderRadius: '20px',
            textAlign: 'center',
            lineHeight: '40px',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
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

        <h4 style={{ fontSize: '24px' }}>Primary Colors</h4>
        <div className="colors-group">{renderColorChips(colorGroups.primary)}</div>

        <h4 style={{ fontSize: '24px' }}>Neutral Colors</h4>
        <div className="colors-group">{renderColorChips(colorGroups.neutral)}</div>

        <h4 style={{ fontSize: '24px' }}>Gray Scale</h4>
        <div className="colors-group">{renderColorChips(colorGroups.grayscale)}</div>
      </div>
    );
  },
};
