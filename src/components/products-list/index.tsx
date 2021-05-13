import React, { useEffect, useRef, useState } from 'react'

import {
  Container,
  ContainerTitle,
  WrapperContainer,
  WrapperProducts,
  WrapperMenu,
  WrapperFilter,
  WrapperSortBar,
  ButtonFilterBar,
  ButtonFilter,
  TitleFilter,
  WrapperFilterModal } from './style'
import FilterSVG from '../../assets/svgs/filter.svg';
import CloseSVG from '../../assets/svgs/close.svg';
import FilteBar from '../filterbar';
import { IReducers } from '../../store/interfaces/reducers';
import { IFilter } from '../../store/interfaces/home';
import BreadCrumb from '../breadcrumb'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../product';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import * as constants from "../../shared/constants"
import PaginationBar from '../paginationbar';
import { IPagination } from '../paginationbar/paginationbar';
import SortBar from '../sortbar';
import { ISort } from '../sortbar/sort';
import Modal from '../modal';
import AppButton from '../button';
import { setClearProductCart } from '../../store/actions/cart';
import { IFilterRef } from '../filterbar/filterbar';
import { clearFilters } from '../../store/actions/home';


const ProductsList: React.FC<AppProps> = (props): JSX.Element => {

  const [page, setPage] = useState(1);
  const [ascFilter, setAscFilter] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [typeFilter, setTypeFilter] = useState("price");
  const childRef = useRef();
  const dispatch = useDispatch();

  const { products } = props;
  const { filterCategory, filterPrice } =
          useSelector((state: IReducers) => state.home) as IFilter;

  const verifyPrice = (title, price) => {
    switch (title) {
      case constants.PRICE_LOWER_20:
          return price < 20 ? true : false

      case constants.PRICE_BETWEEN_20_100:
        return price >= 20 &&  price <= 100 ? true : false

      case constants.PRICE_BETWEEN_100_200:
        return price >= 100 &&  price <= 200 ? true : false

      case constants.PRICE_MORE_200:
        return price > 200 ? true : false

      default:
        return false
    }
  }

  const inCategory = (product) => {
    return filterCategory.every(category => category.status == false) ||
            filterCategory.some(
              category => category.title.toUpperCase() == product.category.toUpperCase() &&
                          category.status == true)
  }

  const inPrice = (product) => {
    return filterPrice.every(price => price.status == false) ||
            filterPrice.some(price => price.status == true &&
                              verifyPrice(price.title, product.price))
  }

  const limit = 6;
  const init = (page - 1) * limit;
  const end = (page * limit);
  const productsFilter = products
                          ?.sort((a, b) =>
                            a[typeFilter] > b[typeFilter] ? ascFilter ? 1 : -1 :
                            a[typeFilter] < b[typeFilter] ? ascFilter ? -1 : 1 : 0
                          )
                          ?.filter(product => product.featured == false &&
                            product?.image?.src
                            && inCategory(product)
                            && inPrice(product)
                          )

  const productsSliced =  productsFilter
                            ?.slice(init, end)
                            ?.map((product, index) =>
                              <Product key={product.name+"_"+index} {...product}/>
                            )

  const onClickPagination = (page) => {
    setPage(page);
  }

  const onClickFilterOrder = (order) => {
    setAscFilter(order);
  }

  const onChangeFilterType = (type) => {
    setTypeFilter(type);
  }

  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const clearFilter = () => {
    dispatch(clearFilters());
  }

  const saveFilter = () => {
    const refFunctions = childRef?.current as IFilterRef;
    refFunctions.saveFilters();
    setOpenModal(false);
  }

  const paginationProps = {
    itensLength: productsFilter?.length,
    limit,
    page,
    onClickPagination
  } as unknown as IPagination

  const arraySelect = [
    { label: "Price", value: "price" },
    { label: "Alphabetic", value: "name" },
  ]

  const sortProps = {
    ascFilter,
    typeFilter,
    arraySelect,
    onClickFilterOrder,
    onChangeFilterType
  } as unknown as ISort

  return (
    <Container>
      <WrapperMenu>
        <BreadCrumb />
        <WrapperSortBar>
          <SortBar {...sortProps}/>
        </WrapperSortBar>
        <ButtonFilterBar
            aria-label="filter button"
            onClick={toggleOpenModal}>
          <FilterSVG />
        </ButtonFilterBar>
      </WrapperMenu>
      <WrapperContainer>
        <WrapperFilter>
          <TitleFilter>Category</TitleFilter>
          <FilteBar />
        </WrapperFilter>
        <WrapperProducts>
          {
            productsSliced?.length > 0 ? productsSliced
            : <ContainerTitle>No products found.</ContainerTitle>
          }
          <PaginationBar  {...paginationProps}/>
        </WrapperProducts>
      </WrapperContainer>
      <Modal
        open={openModal}
        onClickBackground={toggleOpenModal}
        top="100px"
        containerColor="primary">
        <WrapperFilterModal>
          <TitleFilter>Filter</TitleFilter>
          <ButtonFilter
            aria-label="close button"
            onClick={toggleOpenModal}>
            <CloseSVG />
          </ButtonFilter>
        </WrapperFilterModal>
        <FilteBar not_automatic={true} ref={childRef} />
        <WrapperFilterModal>
          <AppButton
            ariaLabel="clear button"
            color="primary"
            onClick={clearFilter}
            disabled={ products?.length == 0 ? true : false }>
            CLEAR
          </AppButton>
          <AppButton
            ariaLabel="save button"
            onClick={saveFilter}>
            SAVE
          </AppButton>
        </WrapperFilterModal>
      </Modal>
    </Container>
  )
}

export default ProductsList
