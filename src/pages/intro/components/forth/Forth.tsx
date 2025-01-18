import card_community from '@assets/images/card_community.png';

import * as S from './Forth.style';

const Forth = () => {
  return (
    <S.PageWrapper>
      <S.Image src={card_community} alt="community-card" />
      <S.PageContainer>
        <div>
          <p>함께 다루다</p>
          <h1>
            함께 성장하는 공간,
            <br /> 다루다 커뮤니티
          </h1>
          <S.DetailText>
            툴 추천, 사용법, 궁금증에 대하여
            <br />
            주변에 물어볼 곳이 없다면
            <br />
            다루다에서 소통하세요.
          </S.DetailText>
        </div>
      </S.PageContainer>
    </S.PageWrapper>
  );
};

export default Forth;
