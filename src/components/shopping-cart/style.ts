import styled from "styled-components";


export const Container = styled.div`
  width: 300px;
  height: auto;
  max-height: 400px;
  margin: 30px 0px;
  font-size: 20px;
  text-align: right;
  font-size: 14px;
  gap: 10px;
  display: flex;
  justify-content: flex-end;
  z-index: 3;
  position: fixed;
  right: 58px;
  border: 4px solid #E4E4E4;
  top: 67px;
  background: ${props => props.theme.colors.background};
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;

  > strong {
    font-weight: 700;
    font-size: 16px;
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

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #C2C2C2;
  border-radius: 100px;
  margin: 10px 0px;
`

export const EmptyCart = styled.div`
  width: -webkit-fill-available;
  text-align: center;
  font-weight: 600;
`

export const Button = styled.button`
  text-align: right;
  cursor: pointer;
  border: none;
  background: ${props => props.theme.colors.background};

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const WrapperDetails = styled.div`
  width: -webkit-fill-available;
  text-align: left;
  font-weight: 600;

  > span {
    color: ${props => props.theme.colors.secondary};
    font-weight: 500;
  }
`

export const Img = styled.img`
  width: 200px;
  object-fit: cover;
  height: 70px;
`

export const WrapperProduct = styled.div`
  display: flex;
  width: 100%;
`

export const WrapperProducts = styled.div`
  overflow-y: scroll;
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
