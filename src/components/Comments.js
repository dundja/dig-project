import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  &:not(:first-child) {
    margin-top: 3rem;
  }
`;

const CommentText = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const CommentDate = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Comments = ({ comments }) => {
  const handleDate = time => {
    if (typeof time !== 'string') return time.toLocaleString();
    const parsed = Date.parse(time);
    return new Date(parsed).toLocaleString();
  };

  return comments.map(({ text, commentId, time }) => (
    <CommentWrapper key={commentId}>
      <CommentDate>{handleDate(time)}</CommentDate>
      <CommentText>{text}</CommentText>
    </CommentWrapper>
  ));
};

export default Comments;
