import React from 'react';
import styled from 'styled-components';
import {
  Box, Container, Divider,
} from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import GridLink from './GridLink';
import { Logo } from '../../Logo';

const FooterBg = styled(Box)`
    background-color: #0077cd;
    padding-top: 65px;
    padding-bottom: 44px;
    color: #fff;
    .MuiContainer-root {
        padding-right: 0px !important; 
        padding-left: 0px;
    }
`;

const FooterDivider = styled(Divider)`
    background-color: #a6cfed;
`;

const Copyright = styled(Box)`
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
`;

function Footer() {
  return (
    <FooterBg>
      <Container maxWidth="md">

        <Box>
          <Logo />
        </Box>

        <GridLink container justify="space-between">
          <GridLink.Item item>
            <header>Empresa</header>
            <ul>
              <li><a href="teste" alt="Sobre">Sobre</a></li>
              <li><a href="teste" alt="Planos e serviços">Planos e serviços</a></li>
              <li><a href="teste" alt="Depoimentos">Depoimentos</a></li>
            </ul>
          </GridLink.Item>
          <GridLink.Item item>
            <header>Educação</header>
            <ul>
              <li><a href="teste" alt="Cursos populares">Cursos populares</a></li>
              <li><a href="teste" alt="Artigos">Artigos</a></li>
              <li><a href="teste" alt="Material Educacional">Material educacional</a></li>
            </ul>
          </GridLink.Item>
          <GridLink.Item item>
            <header>Suporte</header>
            <ul>
              <li><a href="teste" alt="Cursos populares">Dúvidas Frequêntes</a></li>
            </ul>
          </GridLink.Item>
          <GridLink.Item item>
            <header>Leis</header>
            <ul>
              <li><a href="teste" alt="Termos de uso">Termos de uso</a></li>
              <li><a href="teste" alt="Política de privaciade">Política de privaciade</a></li>
            </ul>
          </GridLink.Item>
          <GridLink.Item item>
            <header>Redes Sociais</header>
            <a href="https://www.facebook.com/" alt="Facebook" target="_blank" rel="noreferrer"><Facebook fontSize="large" /></a>
            <a href="https://www.instagram.com/" alt="Instagram" target="_blank" rel="noreferrer"><Instagram fontSize="large" /></a>
            <a href="https://www.linkedin.com/" alt="LinkedIn" target="_blank" rel="noreferrer"><LinkedIn fontSize="large" /></a>
          </GridLink.Item>
        </GridLink>

        <FooterDivider />
        <Copyright>
          Copyright © 2020 - Razão Social Ltda. CNPJ 00.000.000/00001
          <br />
          Rua Lorem Ipsum, 162 - Bairro | Cidade-Estado - CEP: 00000-000
        </Copyright>
      </Container>
    </FooterBg>
  );
}

export default Footer;
