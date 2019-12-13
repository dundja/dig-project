import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ProductContext } from '../context/productContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Comments from '../components/Comments';
import Loader from '../components/Loader';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 3rem 4rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 40%;
`;

const Divider = styled.div`
  width: 0.2rem;
  height: 50rem;
  background-color: ${({ theme }) => theme.colors.dark};
  align-self: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 5rem;
`;

const HeadingSpan = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  display: block;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const TextContentSpan = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.grey};
  margin-top: 2rem;
`;

const TextContentParagraph = styled.span`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 25rem);
  grid-template-rows: repeat(1, 25rem);
  grid-gap: 1rem;
`;
const ProductImg = styled.img`
  max-width: 25rem;
  max-height: 25rem;
`;

const CommentsWrapper = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
`;

const CommentInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10rem;
`;

const CommentTextArea = styled.textarea`
  resize: none;
  outline: none;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.dark};
  width: 40rem;
  height: 20rem;
  padding: 1rem;
  border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
`;

const CardButton = styled.button`
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
  outline: none;
`;

const NoCommentsText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  margin: 3rem 0;
`;

const Product = ({ match }) => {
  const { products, activeProduct, setActiveProduct } = useContext(
    ProductContext
  );
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useLocalStorage('comments');
  const [productComments, setProductComments] = useState([]);

  useEffect(() => {
    if (comments && activeProduct) {
      const filteredComments = comments.filter(
        comment => comment.productId === activeProduct.id
      );
      setProductComments(filteredComments);
    }
  }, [comments, activeProduct]);

  useEffect(() => {
    if (products.length > 0) {
      const paramId = match.params.id;
      const foundedProduct = products.find(product => product.id === +paramId);
      setActiveProduct(foundedProduct);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleLocaleStorage = () => {
    const newComment = {
      commentId: Math.floor(Math.random() * 10000) + 1,
      productId: activeProduct.id,
      text: inputValue,
      time: new Date()
    };
    let tempComments = [];
    if (comments) {
      tempComments = [...comments, newComment];
    } else {
      tempComments = [newComment];
    }
    setComments(tempComments);
    setInputValue('');
  };

  const renderImages = () => {
    return activeProduct.images.map((image, i) => (
      <ProductImg key={i} src={image.original} alt={activeProduct.title} />
    ));
  };

  return (
    <Wrapper>
      {!activeProduct ? (
        <Loader />
      ) : (
        <>
          <InfoWrapper>
            <Heading>
              {activeProduct.title}{' '}
              <HeadingSpan>${activeProduct.price}</HeadingSpan>
            </Heading>
            <ImageWrapper>{renderImages()}</ImageWrapper>
            <TextContent>
              <TextContentSpan>Description:</TextContentSpan>
              <TextContentParagraph>
                {activeProduct.description}
              </TextContentParagraph>
              <TextContentSpan>Specification:</TextContentSpan>
              <TextContentParagraph>
                {activeProduct.specification}
              </TextContentParagraph>
            </TextContent>
          </InfoWrapper>

          <Divider />

          <CommentsWrapper>
            <Heading>Comments</Heading>

            {productComments.length === 0 ? (
              <NoCommentsText>
                There are no comments. Be first to leave one.
              </NoCommentsText>
            ) : (
              <Comments comments={productComments} />
            )}

            <CommentInputWrapp>
              <CommentTextArea
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <CardButton onClick={handleLocaleStorage}>
                Leave comment
              </CardButton>
            </CommentInputWrapp>
          </CommentsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Product;
