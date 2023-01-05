import React from 'react';
import styled from "styled-components";

interface InputProps {
    error?: boolean;
}

export const Input = styled.input.attrs<InputProps>(props => ({
    error: props.error
}))<InputProps>`
    padding: 12px 20px;
    border-radius: var(--radius);
    background-color: whitesmoke;
    width: 100%;
    outline: 0;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    outline: none;
    border: 1px solid ${({error}) =>  error ? 'red' : 'lightgray'};
    font-size: var(--fs-lg);
    &:focus{
      box-shadow: 0 0 2px var(--color-primary);
      border: 1px solid var(--color-primary);
    }
`
