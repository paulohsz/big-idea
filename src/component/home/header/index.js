import React from 'react';
import styled from 'styled-components';
import {
  Box, Button, Container, Grid,
} from '@material-ui/core';
import Widget from './Widget';
import { LogoHeader } from '../../Logo';

const HeaderBackground = styled(Box)`

    height: 969px;
    //background-size: cover;
    padding-top: 24px;
    background-image: url('/image/header_bg.png'), url('/image/header_bg_slice.png');
    background-repeat: no-repeat, repeat-x;
    background-position: center, top;

  .MuiContainer-root {
    padding-right: 0px !important; 
    padding-left: 0px;
  }
`;

const LanguageBrasil = styled.img.attrs({
  src: 'image/brazil.png',
  alt: 'Language Brazil',
  height: '23',
  width: '108',
})`
    margin-top: 6px;
`;
const LoginButton = styled(Button)`
  color: #fff;
  background-color: #f87529;
  border-radius: 18px;
  padding: 6px 40px;
  vertical-align: top;
  &:hover {
    background-color: #dd6824;
  }
`;

function Header() {
  return (
    <HeaderBackground>
      <Container maxWidth="md">

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <LogoHeader />
          </Grid>

          <Grid item>
            <LoginButton>Login</LoginButton>
            <LanguageBrasil />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="flex-end">
          <Widget>
            <Widget.Header as="h2">Comece com uma ideia e termine com um negócio.</Widget.Header>
            Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry....
            <Widget.Input placeholder="Cadastre com seu e-mail" name="email" />
            <Widget.Button>COMECE AGORA</Widget.Button>
          </Widget>
        </Box>

      </Container>
    </HeaderBackground>
  );
}

export default Header;
