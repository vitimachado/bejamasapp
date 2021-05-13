import styled from "styled-components";

export const Img = styled.img`
    object-fit: cover;
    width: 70px;
    height: 100px;
`

export const WrapperImgs = styled.div`
  display: flex;
  gap: 30px;
`

export const WrapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-bottom: 20px;
    width: 50%;

    @media(max-width: 650px) {
      width: 100%;
    }
  }
`

export const WrapperTextLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: { align?: string; }) => props.align == 'rigth' ? "flex-end" : "flex-start"};
  text-align: ${(props: { align?: string; })  => props.align == 'rigth' ? "end" : "start"};
  margin-bottom: ${(props: { align?: string; })  => props.align == 'rigth' ? "30px" : "0px"};

  > label {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 15px;
  }

  > span {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 15px;
  }

  @media(max-width: 650px) {
    align-items: start;
  }
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${props => props.theme.colors.secondary};
`

export const WrapperOtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media(max-width: 650px) {
    align-items: start;
  }
`

export const WrappeSizeDetails = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${props => props.theme.colors.secondary};
`
