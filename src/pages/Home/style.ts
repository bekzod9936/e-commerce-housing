import styled from 'styled-components';
import { devicesize } from '../../utils/device';
import main from '../../assets/imgs/mainpage.jpg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';

export const Container = styled.div`
  background-color: var(--darkblue);
  padding-top: 50px;
  @media (max-width: ${devicesize.tablet}) {
    padding-top: 60px;
  }
  @media (min-width: ${devicesize.laptop}) and (max-width: ${devicesize.laptopM}) {
    padding-top: 80px;
  }
  @media (min-width: ${devicesize.laptopM}) {
    padding-top: 95px;
  }
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Title = styled.div`
  font-family: var(--fontFamily);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: var(--white);
  width: 100%;
`;

export const Head = styled.div`
  font-family: var(--fontFamily);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  color: var(--white);
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 150px 0 40px 0;
`;

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
