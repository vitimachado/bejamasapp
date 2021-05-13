

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CloseSVG from '../../assets/svgs/close.svg';
import { setOpenCart, setClearProductCart } from '../../store/actions/cart';
import { ICart } from '../../store/interfaces/cart';
import { IReducers } from '../../store/interfaces/reducers';
import AppButton from '../button';
import Image from 'next/image'
import {
  Container,
  Divider,
  EmptyCart,
  Button,
  WrapperDetails,
  Img,
  WrapperProduct,
  WrapperProducts } from './style'

const ShoppingCart: React.FC = () => {

  const { open, products } =
          useSelector((state: IReducers) => state.cart) as ICart;
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(setOpenCart(false));
  }

  const clearCart = () => {
    dispatch(setClearProductCart());
  }

  return open ?
     (
      <Container>
        <Button onClick={closeCart} aria-label="close shopping-cart">
          <CloseSVG />
        </Button>
        <WrapperProducts>
          {
            products?.length > 0 ?
              products?.map(product =>
                <WrapperProduct>
                  <WrapperDetails>
                    <div>{product?.name}</div>
                    <span>${product?.price}</span>
                  </WrapperDetails>
                  <Image
                    src={product?.image?.src}
                    alt={product?.image?.alt}
                    width={200}
                    height={70}
                    objectFit="cover"
                    quality={1}
                  />
                </WrapperProduct>
              )
            : <EmptyCart>The shopping cart is empty</EmptyCart>
          }
        </WrapperProducts>
        <Divider />
        <AppButton
          ariaLabel="clear button"
          color="primary"
          onClick={clearCart}
          disabled={ products?.length == 0 ? true : false }>
          CLEAR
        </AppButton>
      </Container>
    )
  : null
}

export default ShoppingCart
