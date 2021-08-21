import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoBrand } from '../../assets/icons/mainlogo.svg';
import { devicesize } from '../../utils/device';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Down } from '../../assets/icons/down.svg';

export const IconPlus = styled(Plus)`
  margin-right: 10px;
`;

export const IconUser = styled(User)`
  margin: 0 20px;
`;

export const IconPhone = styled(Phone)`
  margin-right: 10px;
`;

export const IconDown = styled(Down)`
  margin: 0 20px 0 10px;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 50px;
  @media (max-width: ${devicesize.tablet}) {
    padding: 0 20px;
    height: 60px;
  }
  @media (min-width: ${devicesize.laptop}) and (max-width: ${devicesize.laptopM}) {
    padding: 0 100px;
    height: 80px;
  }
  @media (min-width: ${devicesize.laptopM}) {
    padding: 0 225px;
    height: 95px;
  }
`;

export const Logo = styled(LogoBrand)``;

export const WrapLogo = styled.div``;

export const WrapLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-family: var(--fontFamily);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--blue);
    path {
      fill: var(--blue);
    }
  }
`;

export const CallLink = styled.a`
  display: flex;
  align-items: center;
  font-family: var(--fontFamily);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: var(--white);
  text-decoration: none;
`;
