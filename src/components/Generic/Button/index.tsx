import React from 'react';
import { MButton, Wrapper } from './style';

export interface Props {
  children: any;
  props?: any;
  width?: number;
  height?: number;
  tcolor?: string;
  bgcolor?: string;
  fontSize?: number;
  bradius?: number;
  border?: string;
  margin?: string;
  onClick?: () => void;
  disabled?: boolean;
  bordercolor?: string;
}
const Button = ({ children, ...props }: Props) => {
  return (
    <Wrapper disabled={props.disabled}>
      <MButton {...props}>{children}</MButton>
    </Wrapper>
  );
};

export default Button;
