import React from 'react'

import { Container, Button } from './style'
import { IPagination } from './paginationbar'

const PaginationBar: React.FC<IPagination> = (props) => {
  const { itensLength, limit, page, onClickPagination } = props;
  const pages = Math.ceil(itensLength / limit);
  const disabledRigth = page>=pages;
  return (
    <Container>
      {
        <Button
          aria-label="pagination left arrow"
          disabled={page<=1}
          onClick={() => onClickPagination(page-1)}>
            &#8249;
        </Button>
      }
      {
        Array.apply(null, {length: pages}).map((value, index) =>
          <Button
            aria-label="pagination page"
            key={index+1}
            disabled={index+1 == page}
            onClick={() => onClickPagination(index+1)}>
              {index+1}
          </Button>
        )
      }
      {
        <Button
          aria-label="pagination rigth arrow"
          disabled={page>=pages}
          onClick={() => onClickPagination(page+1)}>
            &#8250;
        </Button>
      }
    </Container>
  )
}

export default PaginationBar
