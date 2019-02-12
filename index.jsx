import React from 'react'
import ReactJson from 'react-json-view'

const shouldCollapse = ({ namespace }) => 
namespace.length > 2

export default function ShowProps(props) {
  return (
    <div>
      <style>
        {`
          .object-key-val {
            position: relative;
          }
          .icon-container {
            position: absolute;
            left: -3px;
          }
        `}
      </style>
      <ReactJson
        name="Props"
        src={props}
        collapseStringsAfterLength={20}
        groupArraysAfterLength={5}
        shouldCollapse={shouldCollapse}
        indentWidth={2}
      />
    </div>
  )
}

