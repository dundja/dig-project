import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProductContext } from '../context/productContext';
import Card from '../components/Card';
import Loader from '../components/Loader';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 5rem;
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`;

const Homepage = () => {
  const { products, isLoading } = useContext(ProductContext);

  const renderProducts = () => {
    return products.map(({ title, images, price, id }) => (
      <Card
        key={id}
        title={title}
        thumbnail={images[0].thumb}
        price={price}
        id={id}
      />
    ));
  };

  return (
    <Wrapper>
      <Heading>DIG Products</Heading>
      <ProductsWrapper>
        {isLoading ? <Loader /> : renderProducts()}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Homepage;
