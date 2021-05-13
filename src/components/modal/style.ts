import styled, { DefaultTheme } from "styled-components";

var fadeTime = '1s';

export const Background = styled.div`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgb(0 0 0 / 25%);
  display: flex;
  justify-content: center;

  -webkit-animation: fadein ${fadeTime}; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein ${fadeTime}; /* Firefox < 16 */
        -ms-animation: fadein ${fadeTime}; /* Internet Explorer */
         -o-animation: fadein ${fadeTime}; /* Opera < 12.1 */
            animation: fadein ${fadeTime};


  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`

export const Container = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${(props: { color?: string, top?: string, theme: any }) =>
    !!props?.color ?
      props?.color == 'primary' ? `${props.theme.colors.background}` : `${props.color}`
    : 'none' };
  margin-top: ${(props: { color?: string, top?: string }) => !!props?.top ? `${props.top};` : '0px;' };


  animation: fadeIn 1s, slideIn .8s linear;

  @keyframes slideIn {
    0% {
      transform: translateY(200px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-in;
    }
  }
`

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
