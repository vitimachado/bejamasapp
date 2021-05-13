import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

import { Container, Label, Input, Span, Title, Divider } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { IReducers } from '../../store/interfaces/reducers';
import { setFilterCategory, setFilterPrice } from '../../store/actions/home';
import { IFilter } from '../../store/interfaces/home';
import { IFilterbar, IFilterRef } from './filterbar';


const FilteBar: React.ForwardRefExoticComponent<IFilterbar & React.RefAttributes<IFilterRef>> =
                forwardRef((props, ref): JSX.Element => {

  const dispatch = useDispatch();
  const { filterCategory, filterPrice } =
          useSelector((state: IReducers) => state.home) as IFilter;
  const [categorys, setCategorys] = useState(filterCategory);
  const [prices, setPrices] = useState(filterPrice);

  const onChangeCategoryCheck = (event) => {
    let objIndex = filterCategory.findIndex((obj => obj.title == event.target.name));
    filterCategory[objIndex].status = event.target.checked;
    props.not_automatic ? setCategorys(filterCategory)
    : dispatch(setFilterCategory(filterCategory));
  };

  const onChangeFilterCheck = (event) => {
    let objIndex = prices.findIndex((obj => obj.title == event.target.name));
    prices[objIndex].status = event.target.checked;
    props.not_automatic ? setPrices(prices)
    : dispatch(setFilterPrice(prices));
  };

  useImperativeHandle(ref, () => ({
    saveFilters() {
      dispatch(setFilterCategory(categorys));
      dispatch(setFilterPrice(prices));
    }
  }));

  return (
    <Container>
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
        prices?.map(price =>
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
})

export default FilteBar
