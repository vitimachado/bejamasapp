import styled, { DefaultTheme } from "styled-components";

export const Button = styled.button`
  height: auto;
  width: 100%;
  border-radius: 0px;
  padding: 6px 30px;
  cursor: pointer;

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.07em;
  text-align: center;

  background: ${(props: { theme: DefaultTheme, color?: string; }) =>
                  props.color == 'primary' ?
                  props.theme.colors.background :
                  props.theme.colors.buttonBackground
                };
  color: ${(props: { theme: DefaultTheme, color?: string; }) =>
            props.color == 'primary' ?
            props.theme.colors.text :
            props.theme.colors.buttonText
          };

  border: ${(props: { theme: DefaultTheme, color?: string; }) =>
            props.color == 'primary' ?
            `3px solid ${props.theme.colors.text};` :
            'none'
          };

  opacity:  ${(props: { theme: DefaultTheme, color?: string, disabled?: boolean }) =>
              props.disabled == true ? 0.5 : 1
            };

  *:focus {outline:none}

  &:hover {
    background: ${(props: { theme: DefaultTheme, color?: string, disabled?: boolean }) =>
            props.disabled == true ?
              props.color == 'primary' ?
              props.theme.colors.background :
              props.theme.colors.buttonBackground
            :
              props.color == 'primary' ?
              props.theme.colors.secondaryLigth :
              props.theme.colors.buttonBackgroundHover
          };
  }
`
