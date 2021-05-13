import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    font-size: 20px;
    display: flex;
    justify-content: center;

  > strong {
    font-weight: 700;
  }

  > span {
    color: ${props => props.theme.colors.secondary};
  }
`

export const Button = styled.button`
  background: white;
  border: none;
  padding: 6px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
`
