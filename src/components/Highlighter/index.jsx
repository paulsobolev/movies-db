import React from 'react'
import './Highlighter.css'

function highlightQuery(string, query) {
  if (query) {
    const reg = new RegExp(`(${query})`, 'gi');
    return string.toString().replace(reg, "<span class=\"highlighted\">$1</span>")
  }

  return string
}

function Highlighter({string, query, ...props}) {
  return (
    <span {...props} dangerouslySetInnerHTML={{__html: highlightQuery(string, query)}} />
  )
}

export default Highlighter
