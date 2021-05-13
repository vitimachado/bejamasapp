import React from 'react'

import {
  Container,
  Img,
  ContainerTitle,
  Title,
  Divider,
  ImgMsg,
  WrapperButton,
  MainImage,} from './style'
import { IProduct } from '../../shared/models/product';
import DetailsProduct from './details';
import AppButton from '../button';
import { useDispatch } from 'react-redux';
import { setAddProductCart } from '../../store/actions/cart';
import Image from 'next/image'


const MainProduct: React.FC<IProduct.IProps> = (props): JSX.Element => {

  const dispatch = useDispatch();
  const addToCart = (props) => {
    dispatch(setAddProductCart(props));
  }
  return props?.name ?
  (
    <Container>
      <ContainerTitle>
        <Title>{props?.name}</Title>
        <WrapperButton>
          <AppButton
            color="secondary"
            onClick={() => addToCart(props)}
            ariaLabel="add button">
            ADD TO CART
          </AppButton>
        </WrapperButton>
        <MainImage>
          <Image
            src={props?.image?.src}
            alt={props?.image?.alt}
            width={200}
            height={60}
            layout="responsive"
            objectFit="cover"
          />
          <ImgMsg>Photo of the Day</ImgMsg>
      </MainImage>
      </ContainerTitle>
      <DetailsProduct {...props} />
      <Divider />
    </Container>
  ) : null
}

export default MainProduct
