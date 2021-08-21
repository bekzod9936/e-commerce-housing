import React from 'react';
import Button from '../../components/Generic/Button';
import {
  Container,
  Head,
  Title,
  Wrapper,
  MainSearch,
  UL,
  LI,
  IconSearch,
} from './style';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Title>IT'S GREAT TO BE HOME!</Title>
        <Head>Find Your Perfect Home</Head>
      </Wrapper>
      <UL>
        <LI>Buy</LI>
        <LI>Rent</LI>
        <LI>Sold</LI>
      </UL>
      <MainSearch>
        <Button width={130}>
          <IconSearch />
          SEARCH
        </Button>
      </MainSearch>
    </Container>
  );
};

export default Home;
