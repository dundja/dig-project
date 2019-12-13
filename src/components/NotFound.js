import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  min-height: 100vh;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  margin-top: 10rem;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Heading>
        Ooops. We didnt find your page. Pleaes go back to
        <Link to='/'> products.</Link>
      </Heading>
    </Wrapper>
  );
};

export default NotFound;
