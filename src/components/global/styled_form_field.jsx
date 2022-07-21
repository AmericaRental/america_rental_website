import React from 'react'
import styled from 'styled-components'

const Input = styled.input``;

function StyledFField(props) {
  return (
    <>
      <Input alt={props.alt} inputMode={props.input || 'text'}/>
    </>
  )
}

export default StyledFField
