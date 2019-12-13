import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ProductContext } from '../context/productContext';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.mainWhite};
`;

const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;

const CardPrice = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;

const CardButton = styled(Link)`
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.6rem;
  width: 50%;
  margin-top: 1.2rem;
  text-decoration: none;
  text-align: center;
`;

const Card = ({ title, thumbnail, price, id }) => {
  const { handleActiveProduct } = useContext(ProductContext);

  const handleOnClick = () => {
    handleActiveProduct(id);
  };

  return (
    <CardWrapper>
      <CardImageWrapper>
        <img src={thumbnail} alt='product' />
      </CardImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
        <CardButton to={`/product/${id}`} onClick={handleOnClick}>
          Details
        </CardButton>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
