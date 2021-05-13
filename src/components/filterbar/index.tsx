import React, { useState } from 'react'

import { Container, Label, Input, Span, Title, Divider } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { IReducers } from '../../store/interfaces/reducers';
import { setFilterCategory, setFilterPrice } from '../../store/actions/home';
import { IFilter } from '../../store/interfaces/home';


const FilteBar: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  const { filterCategory, filterPrice } =
          useSelector((state: IReducers) => state.home) as IFilter;

  const onChangeCategoryCheck = (event) => {
    let objIndex = filterCategory.findIndex((obj => obj.title == event.target.name));
    filterCategory[objIndex].status = event.target.checked;
    dispatch(setFilterCategory(filterCategory));
  };

  const onChangeFilterCheck = (event) => {
    let objIndex = filterPrice.findIndex((obj => obj.title == event.target.name));
    filterPrice[objIndex].status = event.target.checked;
    dispatch(setFilterPrice(filterPrice));
  };

  return (
    <Container>
      <Title>Category</Title>
      {
        filterCategory?.map(category =>
          <Label key={ category.title }>
            { category.title }
            <Input
              type="checkbox"
              name={ category.title }
              onChange={onChangeCategoryCheck}
              defaultChecked={ category.status }/>
            <Span></Span>
          </Label>
        )
      }
      <Divider />
      <Title>Price Range</Title>
      {
        filterPrice?.map(price =>
          <Label key={ price.title }>
            { price.title }
            <Input
              type="checkbox"
              name={ price.title }
              onChange={onChangeFilterCheck}
              defaultChecked={ price.status }/>
            <Span></Span>
          </Label>
        )
      }
    </Container>
  )
}

export default FilteBar
