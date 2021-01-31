import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Widget = styled.div`
  width: 392px;
  margin-top: 235px;
  margin-right: 84px;
  color: #fff;
`;

Widget.Header = styled.header`
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 39px;
`;

Widget.Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #fff;
  outline: 0;
  margin-top: 24px;
  margin-bottom: 14px;
  border-radius: 8px; 
`;

Widget.Button = styled(Button)`
  width: 100%;
  color: #fff;
  background-color: #f87529;
  border-radius: 18px;
  padding: 6px 40px;
  &:hover {
    background-color: #dd6824;
  }
`;

export default Widget;
