import styled from 'styled-components';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

export const Container = styled.div``;

export const UL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LI = styled.div`
  font-family: var(--fontFamily);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: var(--white);
  margin: 0 15px;
`;

export const MainSearch = styled.div``;

export const IconSearch = styled(Search)`
  margin-right: 10px;
  path {
    fill: var(--white);
  }
`;
