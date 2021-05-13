import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 30px 0px;
  font-size: 20px;
  text-align: right;
  font-size: 14px;
  gap: 10px;
  display: flex;
  justify-content: flex-end;

  > strong {
    font-weight: 700;
    font-size: 16px;
  }

  > button {
    color: ${props => props.theme.colors.secondary};
    background: ${props => props.theme.colors.background};
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  > select {
    text-align: right;
    width: 60px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`
