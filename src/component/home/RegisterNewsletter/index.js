import React from 'react';
import styled from 'styled-components';
import {
  Box, Container,
} from '@material-ui/core';
import WidgetNewsletter from './Widget';

const NewsletterBg = styled(Box)`
    background-color: #e5edf2;
    .MuiContainer-root {
        padding-right: 0px !important; 
        padding-left: 0px;
    }
`;

function RegisterNewsletter() {
  return (
    <NewsletterBg>
      <Container maxWidth="md">

        <WidgetNewsletter>
          {/* eslint-disable-next-line max-len */}
          <WidgetNewsletter.Header>Assine a nossa newsletter e fique por dentro dos eventos e conteúdo exclusivos!</WidgetNewsletter.Header>
          <WidgetNewsletter.Content>
            {/* eslint-disable-next-line max-len */}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since...
          </WidgetNewsletter.Content>
          <WidgetNewsletter.Input name="email" />
          <WidgetNewsletter.Button>Button</WidgetNewsletter.Button>
        </WidgetNewsletter>

      </Container>
    </NewsletterBg>
  );
}

export default RegisterNewsletter;
