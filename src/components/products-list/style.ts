import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.colors.background};
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const Img = styled.img`
    width: 100%;
    height: 30vw;
    object-fit: cover;
`

export const ContainerTitle = styled.div`
    font-family: Archivo;
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    margin: auto
`

export const Title = styled.div`
  font-family: Archivo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
`

export const WrapperContainer = styled.div`
  display: flex;
  gap: 80px;
`

export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`

export const WrapperMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 20px 0px;
`
