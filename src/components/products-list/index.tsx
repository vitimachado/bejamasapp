import React, { useEffect, useState } from 'react'

import { Container, ContainerTitle, WrapperContainer, WrapperProducts, WrapperMenu } from './style'
import FilteBar from '../filterbar';
import { IReducers } from '../../store/interfaces/reducers';
import { IFilter } from '../../store/interfaces/home';
import BreadCrumb from '../breadcrumb'
import { useSelector } from 'react-redux';
import Product from '../product';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import * as constants from "../../shared/constants"
import PaginationBar from '../paginationbar';
import { IPagination } from '../paginationbar/paginationbar';
import SortBar from '../sortbar';
import { ISort } from '../sortbar/sort';


const ProductsList: React.FC<AppProps> = (props): JSX.Element => {

  const [page, setPage] = useState(1);
  const [ascFilter, setAscFilter] = useState(true);
  const [typeFilter, setTypeFilter] = useState("price");
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
        <SortBar {...sortProps}/>
      </WrapperMenu>
      <WrapperContainer>
        <FilteBar />
        <WrapperProducts>
          {
            productsSliced?.length > 0 ? productsSliced
            : <ContainerTitle>No products found.</ContainerTitle>
          }
          <PaginationBar  {...paginationProps}/>
        </WrapperProducts>
      </WrapperContainer>
    </Container>
  )
}

export default ProductsList
