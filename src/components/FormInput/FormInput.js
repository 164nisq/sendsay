import React from 'react';
import styled from "styled-components";

const FormInput = ({ name, label, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <StyledInput id={name} name={name} {...rest}/>
        </div>
    );
};

const StyledInput = styled.input`
  width: 100%;
  line-height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 18px;
`

export default FormInput;