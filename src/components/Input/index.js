import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const StyledInput = styled.input`
  background:#5579A1;
  color:white;
  border:none;
  height:34px;
  border-radius:34px;
  ::placeholder{
    color:white;
  }
  `;
  return (
    <StyledInput type="text" {...props} />
  );
}


export default Input;