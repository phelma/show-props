import React from 'react'
import JSONTree from 'react-json-tree'

const shouldExpandNode = (keyName, data, level) => level < 1

export default function ShowProps(props) {
  return (
    <div>
      <JSONTree data={props} invertTheme shouldExpandNode={shouldExpandNode} />
    </div>
  )
}
