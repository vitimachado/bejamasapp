import React from 'react'

import {
  Container,
  Img,
  WrapperButton,
  ImgMsg,
  WrapperDetails,} from './style'
import { IProduct } from '../../shared/models/product';
import AppButton from '../button';
import { useDispatch } from 'react-redux';
import { setAddProductCart } from '../../store/actions/cart';
import Image from 'next/image'


const Product: React.FC<IProduct.IProps> = (props): JSX.Element => {

  const dispatch = useDispatch();
  const addToCart = (props) => {
    dispatch(setAddProductCart(props));
  }

  return (
    <Container>
      <Image
        src={props?.image?.src}
        alt={props?.image?.alt}
        width={200}
        height={280}
        layout="responsive"
        objectFit="cover"
        quality={1}
      />
      <WrapperDetails>
        <label>{props?.category}</label>
        <div>{props?.name}</div>
        <span>${props?.price}</span>
      </WrapperDetails>
      <WrapperButton>
        <AppButton
          ariaLabel="add button"
          color="secondary"
          onClick={() => addToCart(props)}>
          ADD TO CART
        </AppButton>
      </WrapperButton>
      {
        props?.bestseller ?
          <ImgMsg>Best Seller</ImgMsg>
        : null
      }
    </Container>
  )
}

export default Product
