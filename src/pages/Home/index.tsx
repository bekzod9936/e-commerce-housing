import React from 'react';
import SearchBar from './SearchBar';
import { Container, Head, Title, Wrapper } from './style';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Title>IT'S GREAT TO BE HOME!</Title>
        <Head>Find Your Perfect Home</Head>
      </Wrapper>
      <SearchBar />
    </Container>
  );
};

export default Home;
