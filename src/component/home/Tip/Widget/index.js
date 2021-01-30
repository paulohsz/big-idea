import { Box } from '@material-ui/core';
import styled from 'styled-components';

const Widget = styled(Box)`
  width: 480px;
`;

Widget.Header = styled.header`
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 39px;
`;

Widget.Content = styled.span`
  font-size: 14px;
`;

export default Widget;
