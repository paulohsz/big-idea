import React from 'react';
import { Box, Container } from '@material-ui/core';
import styled from 'styled-components';
import Widget from './Widget';

const TipContainer = styled(Container)`
   padding-right: 0px;
   padding-left: 0px;
`;

function Tip() {
  return (
    <TipContainer maxWidth="md">
      <Box display="flex">
        <Widget>
          <Widget.Header>
            Como funciona?
          </Widget.Header>
          <Widget.Content>
            {/* eslint-disable-next-line max-len */}
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use...
            <br />
            <br />
            {/* eslint-disable-next-line max-len */}
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use...

          </Widget.Content>
        </Widget>
        <img src="image/home_tip.png" alt="Como funciona?" width="480" height="394" />
      </Box>

    </TipContainer>
  );
}

export default Tip;
