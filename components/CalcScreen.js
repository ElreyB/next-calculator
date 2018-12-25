import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 6px solid black;
  background-color: #efefef;
  padding: 3px 1px;
  text-align: right;
  line-height: 8rem;
  width: 32rem;
  max-height: 8rem;
  min-height: 8rem;
  overflow: scroll;
`;
const WrapperTwo = styled.div`
  border-bottom: 6px solid black;
  background-color: #efefef;
  display: flex;
  justify-content: flex-end;
`;

const InputContainer = styled.div`
  border-bottom: 6px solid black;
  background-color: #efefef;
  padding: 3px 1px;
  text-align: right;
  line-height: 8rem;
  width: 32rem;
  max-height: 8rem;
  min-height: 8rem;
  display: flex;
  justify-content: flex-end;
`;

const ScreenInput = styled.span`
  font-size: 4.8rem;
  min-height: 8rem;
`;

export const CalcScreen = ({ input }) => (
  <Wrapper>
    <InputContainer>
      <ScreenInput>{input}</ScreenInput>
    </InputContainer>
  </Wrapper>
);
