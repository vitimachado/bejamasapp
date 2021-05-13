import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 30px 0px;
  font-size: 20px;

  > strong {
    font-weight: 700;
  }

  > span {
    color: ${props => props.theme.colors.secondary};
  }
`
