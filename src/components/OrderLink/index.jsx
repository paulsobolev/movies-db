import React from 'react'
import {Icon} from 'semantic-ui-react'

const propTypes = {
  orderedBy: React.PropTypes.string.isRequired,
  field:     React.PropTypes.string.isRequired,
  onClick:   React.PropTypes.func.isRequired
}

function OrderLink({orderedBy, field, onClick, ...props}) {
  let orderDirectionIcon = null
  if (orderedBy === field || orderedBy === ('-' + field)) {
    let iconName = orderedBy[0] !== '-' ? 'sort content ascending' : 'sort content descending'
    orderDirectionIcon = <Icon disabled name={iconName} />
  }

  const onClickHandler = (e) => {
    e.preventDefault()
    onClick(field)
  }

  return (
    <a href="" onClick={(e) => onClickHandler(e)} className="order-link" {...props}>
      {props.children} {orderDirectionIcon}
    </a>
  )
}

OrderLink.propTypes = propTypes

export default OrderLink

