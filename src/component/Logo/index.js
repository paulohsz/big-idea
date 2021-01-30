import styled from 'styled-components';

export const Logo = styled.img.attrs({
  src: 'image/logo.png',
})`
      height: 22px;
      width: 139px;
  `;

// eslint-disable-next-line import/prefer-default-export
export const LogoHeader = styled(Logo)`
    margin-left: 71px;
  `;
