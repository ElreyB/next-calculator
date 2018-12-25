import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  font-size: 3.2rem;
  width: ${props => (props.xl ? '32rem' : '8rem')};
  height: 8rem;
`;
