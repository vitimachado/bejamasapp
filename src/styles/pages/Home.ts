import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 60px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 52px;
      margin-top: 38px;
  }

  p {
      font-size: 24px;
      margin-top: 24px;
      line-height: 32px;
  }

  @media(max-width: 400px) {
    padding: 60px 20px;
  }
`
