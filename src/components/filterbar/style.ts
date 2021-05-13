import styled from "styled-components";

export const Container = styled.div`
    width: 160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
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
`

export const Title = styled.div`
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 15px
`

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #C2C2C2;
  border-radius: 100px;
  margin: 30px 0px;
`

export const Input = styled.input`
`

export const Span = styled.span`
  position: absolute;
  top: 5px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #000;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${Input} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${Span} {
      &:after {
        display: block;
      }
    }
  }

  &:hover {
    ${Input} ~ ${Span} {
    }
  }

  ${Span} {
    &:after {
      left: 4px;
      top: 0px;
      width: 5px;
      height: 10px;
      border: solid #000;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
