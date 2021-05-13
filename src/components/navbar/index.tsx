import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import LogoSVG from '../../assets/svgs/logo.svg';
import ShoppingCartSVG from '../../assets/svgs/shopping-cart.svg';
import { setOpenCart } from '../../store/actions/cart';
import { ICart } from '../../store/interfaces/cart';
import { IReducers } from '../../store/interfaces/reducers';
import { Divider } from '../main-product/style';
import { Container, Row, WrapperNav, Button } from './style'

const Navbar: React.FC = () => {

  const { open, products } =
          useSelector((state: IReducers) => state.cart) as ICart;
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(setOpenCart(!open));

  return (
    <Container>
      <WrapperNav>
        <Row>
          <LogoSVG />
          <Button onClick={toggleCart} aria-label="shopping-cart">
            <ShoppingCartSVG />
            {
              products?.length > 0 ?
                <div>
                  { products?.length }
                </div>
              : null
            }
          </Button>
        </Row>
        <Divider />
      </WrapperNav>
    </Container>
  )
}

export default Navbar
