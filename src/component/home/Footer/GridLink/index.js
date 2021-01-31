import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const GridLink = styled(Grid)`
  padding-top: 45px;
  padding-bottom: 65px;
  color: #fff;
`;
GridLink.Item = styled(Grid)`

    header {
      font-size: 16px;
      font-weight: 700;
    }
    ul {
      list-style: none;
      margin: 16px 0 0 0;
      padding: 0;
    }
    li {
      padding-top: 8px;
    }
    a {
      color: #fff;
      text-decoration: none;
      transition: color 150ms ease-in-out;
    }
    a:hover {
      color: #c6e7fc;
    }
`;
export default GridLink;
