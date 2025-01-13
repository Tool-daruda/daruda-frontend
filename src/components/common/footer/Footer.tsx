import { IcInstaGray20 } from '@assets/svgs';

import * as S from './Footer.styled';

const FOOTER_INFO = [
  { title: 'Team', content: '파베르(faber)' },
  { title: 'Plan', content: '| 김용기 김소영' },
  { title: 'Client', content: '| 노찬영 김고은 김채현 최 민' },
  { title: '', content: '' },
  { title: 'Design', content: '| 이은제 이재영' },
  { title: 'Server', content: '| 박지원 곽재민' },
];

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContents>
        <S.FooterLinkItem>이용약관</S.FooterLinkItem>
        <S.FooterLinkItem>개인정보처리방침</S.FooterLinkItem>
        <S.FooterLinkItem>청소년보호정책</S.FooterLinkItem>
        <S.FooterLinkItem>커뮤니티이용규칙</S.FooterLinkItem>
      </S.FooterContents>
      <S.FooterDivider />
      <S.FooterDetail>
        <S.FooterContact>
          <span>
            고객센터 : <a href="mailto:daruda241221@gmail.com">daruda241221@gmail.com</a>
          </span>
          <S.InstagramLink href="https://www.instagram.com/daruda.official/" target="_blank" rel="noopener noreferrer">
            <IcInstaGray20 width="2rem" height="2rem" />
            <span>https://www.instagram.com/daruda.official/</span>
          </S.InstagramLink>
        </S.FooterContact>
        <S.FooterTeam>
          {FOOTER_INFO.map((item, index) => (
            <S.TeamWrapper key={index}>
              <S.TeamTitle>{item.title}</S.TeamTitle>
              <S.TeamContent>{item.content}</S.TeamContent>
            </S.TeamWrapper>
          ))}
        </S.FooterTeam>
      </S.FooterDetail>
    </S.FooterWrapper>
  );
};

export default Footer;
