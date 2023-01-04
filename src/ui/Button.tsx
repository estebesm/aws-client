import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
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