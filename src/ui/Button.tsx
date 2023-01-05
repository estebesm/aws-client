import styled from "styled-components";
import {HTMLProps} from "react";
import {BeatLoader} from "react-spinners";

interface Props extends HTMLProps<HTMLButtonElement>{
    fetching?: boolean
}

const SubmitButtonStyled = styled.button<Props>`
  width: 100%;
  padding: 12px 20px;
  border-radius: var(--radius);
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  cursor: pointer;
  color: whitesmoke;
  font-size: var(--fs-lg);
  transition: .2s;
  &:active, &:disabled{
    background-color: var(--color-primary-dark);
  }
`

export const SubmitButton = ({onClick, fetching, children}: Props) => {
    return (
        <SubmitButtonStyled onClick={onClick}>
            {
                fetching ?
                    <BeatLoader
                        color="white"
                        size={7}
                    /> : children
            }
        </SubmitButtonStyled>
    )
}
