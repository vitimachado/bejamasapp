import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      width: fit-content;
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font: 400 18px Archivo, san-serif;
      line-height: 27px;
  }
`
