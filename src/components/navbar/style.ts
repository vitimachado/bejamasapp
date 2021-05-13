import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 70px;
`

export const WrapperNav = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    position: fixed;
    top: 0px;
    z-index: 2;
    background: ${props => props.theme.colors.background};

    @media(max-width: 650px) {
      padding: 10px 0px;
    }
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media(max-width: 650px) {
      padding: 0px 30px;
    }
`

export const Img = styled.img`
  height: 44px;
`

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  > div {
    background: black;
    color: white;
    width: 15px;
    height: 15px;
    position: absolute;
    right: -8px;
    bottom: -10px;
  }
`
