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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  flex-wrap: wrap;
`

export const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
`

export const Divider = styled.div`
  width: 100%;
  border-bottom: 4px solid #E4E4E4;
  border-radius: 100px;
  margin: 10px 0px;
`

export const ImgMsg = styled.span`
  height: auto;
  width: max-content;
  border-radius: 0px;
  border: none;
  padding: 6px 30px;
  position: absolute;
  bottom: 0px;

  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.07em;
  text-align: center;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`

export const WrapperButton = styled.div`
  @media(max-width: 650px) {
    order: 3;
    width: -webkit-fill-available;
  }
`
export const MainImage = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;

  @media(max-width: 650px) {
    > div {
      height: 350px;
    }
  }
`
