import styled from 'styled-components';

export const Logo = styled.img.attrs({
  src: 'image/logo.png',
  alt: 'Logo',
  height: 22,
  width: 139,
})``;

// eslint-disable-next-line import/prefer-default-export
export const LogoHeader = styled(Logo)`
    margin-left: 71px;
  `;
