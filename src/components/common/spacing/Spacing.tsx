import styled from '@emotion/styled';

interface SpacingPropType {
  size: string;
}

const Spacing = ({ size }: SpacingPropType) => <SpacingBox $size={size} />;

export default Spacing;

export const SpacingBox = styled.div<{ $size: string }>`
  margin-bottom: ${({ $size }) => $size || '0'}rem;
`;
