import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;

  @media (min-width: 575.98px) {
      max-width: 540px;
      margin: auto;
      padding: 0;
  }

  @media (min-width: 767.98px) {
      max-width: 720px;
  }

  @media (min-width: 991.98px) {
      max-width: 960px;
  }

  @media (min-width: 1199.98px) {
      max-width: 1140px;
  }
`