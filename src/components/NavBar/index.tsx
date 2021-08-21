import React from 'react';
import {
  Container,
  Logo,
  WrapLogo,
  WrapLinks,
  IconPlus,
  IconUser,
  IconDown,
  IconPhone,
  CallLink,
  NavLink,
} from './style';
import { data } from '../../utils/sidebar';
import Button from '../Generic/Button';
import { Box } from '@material-ui/core';

const NavBar = () => {
  return (
    <Container>
      <WrapLogo>
        <NavLink to='/home'>
          <Logo />
        </NavLink>
      </WrapLogo>
      <WrapLinks>
        {data.map((v) => (
          <NavLink key={v.id} to={v.path}>
            {v.title}
            <IconDown />
          </NavLink>
        ))}
        <CallLink href='tel:(+88) 1990 6886'>
          <IconPhone />
          (+88) 1990 6886
        </CallLink>
        <IconUser />
        <Button
          fontSize={12}
          bgcolor='var(--white)'
          tcolor='var(--blue)'
          height={40}
        >
          <Box>
            <IconPlus />
          </Box>
          Create Listing
        </Button>
      </WrapLinks>
    </Container>
  );
};

export default NavBar;
