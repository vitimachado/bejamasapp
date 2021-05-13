import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.colors.background};
  position: relative;
  margin: 0px 20px 40px 20px;

  @media(max-width: 650px) {
    width: 90%;
  }
`

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 280px;
`

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
`

export const ImgMsg = styled.div`
  position: absolute;
  top: 0px;
  height: auto;
  width: max-content;
  border-radius: 0px;
  border: none;
  padding: 0px 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.07em;
  text-align: center;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  z-index: 1;
`

export const WrapperImage = styled.div`
  position: relative;
`

export const WrapperButton = styled.div`
  position: absolute;
  bottom: 0px;
  width: -webkit-fill-available;
`

export const WrapperDetails = styled.div`
  position: relative;
  top: 5px;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;
  text-transform: capitalize;

  > label {
    font-family: Archivo;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.colors.secondary};
  }

  > span {
    font-family: Archivo;
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.colors.secondary};
  }
`
