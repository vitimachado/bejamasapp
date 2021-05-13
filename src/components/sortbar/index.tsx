import React from 'react'

import { ISort } from './sort';
import { Container } from './style'

const SortBar: React.FC<ISort> = (props) => {
  return (
    <Container>
      <button onClick={() => props.onClickFilterOrder(!props.ascFilter)}
          aria-label="sort button">
        { props.ascFilter ? <>&#8693; </> : <>&#8645; </> }
        Sort By
      </button>
      <select onChange={(option) => props.onChangeFilterType(option.target.value)}>
        {
          props.arraySelect?.map(options =>
            <option key={options.label} value={ options.value }>{ options.label }</option>
          )
        }
      </select>
    </Container>
  )
}

export default SortBar
