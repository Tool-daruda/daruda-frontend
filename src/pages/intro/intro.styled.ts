import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Section = styled.div`
  scroll-snap-align: start;
  height: 100vh;
`;
