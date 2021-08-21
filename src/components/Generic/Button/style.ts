import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Props } from './index';

export const MButton = styled(Button)`
  font-family: var(--fontFamily) !important;

  width: ${({ width }: Props) =>
    width ? `${width}px` : 'fit-content'} !important;
  height: ${({ height }: Props) =>
    height ? `${height}px` : 'fit-content'}!important;
  color: ${({ tcolor }: Props) => tcolor || 'var(--white)'} !important;
  background-color: ${({ bgcolor }: Props) =>
    bgcolor || 'var(--blue)'}!important;
  font-size: ${({ fontSize }: Props) => `${fontSize}px`}!important;
  border-radius: ${({ bradius }: Props) => `${bradius}px` || '3px'}!important;
  border: ${({ border }: Props) => border || '1px solid'}!important;
  border-color: ${({ bordercolor }: Props) =>
    bordercolor || 'transparent'}!important;
  margin: ${({ margin }: Props) => margin}!important;
  font-style: normal !important;

  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  span.MuiButton-label {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-top: 2px;
    width: inherit;
  }
`;

export const Wrapper = styled.div`
  cursor: ${({ disabled }: Props) => disabled && 'not-allowed !important'};
  .Mui-disabled {
    color: ${({ disabled }: Props) => disabled && 'gray'}!important;
    background-color: lightgray !important;
    border-color: transparent !important;
    opacity: ${({ disabled }) => disabled && '0.5'}!important;
  }

  width: fit-content;
  height: fit-content;
  display: inline-block;
  min-width: fit-content;
`;
