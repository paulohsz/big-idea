import { Button, Box } from '@material-ui/core';
import styled from 'styled-components';

const WidgetNewsletter = styled.div`
  width: 100%;
  padding: 30px 85px;
  color: #000;
    text-align: center;
`;

WidgetNewsletter.Header = styled.header`
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 18px;
`;

WidgetNewsletter.Content = styled(Box)`
    width: 100%;
    padding: 0px 30px;
    font-size: 14px;
    margin-bottom: 20px;
`;

WidgetNewsletter.Input = styled.input`
  width: 50%;
  padding: 8px;
  font-size: 14px;
  border: 0px solid #fff;
  outline: 0;
  margin-top: 1px;
  border-radius: 8px;
  box-shadow: inset 1px 4px 11px #d6d4d4;
`;

WidgetNewsletter.Button = styled(Button)`
  color: #fff;
  background-color: #f87529;
  border-radius: 18px;
  padding: 6px 40px;
  margin-left: 12px;
  &:hover {
    background-color: #dd6824;
  }
`;

export default WidgetNewsletter;
