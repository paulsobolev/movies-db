import React from 'react'
import {Button} from 'semantic-ui-react'
import {generatePaginationItems} from '../../utils'

const propTypes = {
  currentPage:    React.PropTypes.number.isRequired,
  lastPage:       React.PropTypes.number.isRequired,
  setCurrentPage: React.PropTypes.func.isRequired
}

function Pagination({currentPage, lastPage, setCurrentPage, ...props}) {
  const pages = generatePaginationItems(currentPage, lastPage)
  const buttons = pages.map((page, index) => {
    return page === '...' ? (
        <Button key={page + index} disabled>...</Button>
      ) : (
        <Button key={page + index} active={currentPage === page} onClick={() => setCurrentPage(page)}>{page}</Button>
      )
  })

  return (
    <Button.Group basic {...props}>
      <Button
        icon="left chevron"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      {buttons}
      <Button
        icon="right chevron"
        disabled={currentPage >= lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </Button.Group>
  )
}

Pagination.propTypes = propTypes

export default Pagination
