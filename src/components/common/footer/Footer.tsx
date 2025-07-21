import * as S from './Footer.styled';
import { IcInstaGray20 } from '@assets/svgs';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContents>
        <S.FooterLinkItem href="https://common-anorak-2f2.notion.site/22d81b02156a81efa63ad41b3b6a2971?source=copy_link">
          이용약관
        </S.FooterLinkItem>
        <S.FooterLinkItem href="https://common-anorak-2f2.notion.site/22d81b02156a813a8c74f5e3aeb89dba?source=copy_link">
          개인정보처리방침
        </S.FooterLinkItem>
        <S.FooterLinkItem href="https://common-anorak-2f2.notion.site/22d81b02156a811a9073c95e6346d9da?source=copy_link">
          청소년보호정책
        </S.FooterLinkItem>
        <S.FooterLinkItem href="https://common-anorak-2f2.notion.site/22d81b02156a81648255f85314afbaf9?source=copy_link">
          커뮤니티이용규칙
        </S.FooterLinkItem>
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
      </S.FooterDetail>
    </S.FooterWrapper>
  );
};

export default Footer;
