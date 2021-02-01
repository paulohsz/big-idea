import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Box, Container,
} from '@material-ui/core';
import WidgetNewsletter from './WidgetNewsletter';

const NewsletterBg = styled(Box)`
    background-color: #e5edf2;
    .MuiContainer-root {
        padding-right: 0px !important; 
        padding-left: 0px;
    }
`;
function RegisterNewsletter({ onSubNews }) {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setEmail(onSubNews(email));
  }

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

          <form onSubmit={(e) => handleSubmit(e)}>
            <WidgetNewsletter.Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <WidgetNewsletter.Button type="submit">Button</WidgetNewsletter.Button>
          </form>
        </WidgetNewsletter>

      </Container>
    </NewsletterBg>
  );
}

RegisterNewsletter.propTypes = {
  onSubNews: PropTypes.func.isRequired,
};

export default RegisterNewsletter;
