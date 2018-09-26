import React from 'react'
import styled from 'styled-components'
import { color, size } from '../../theme'
import RouteDetails from '../map/RouteDetails'

const StyledHeader = styled.header`
  background-color: ${color.background};
  padding: ${size.padding};
  position: absolute;
  z-index: 1001;
  width: calc(100vw - ${size.padding} - ${size.padding});
  height: ${size.headerHeight};
  color: ${color.text};
`

const Header = () =>
  <StyledHeader>
    <RouteDetails />
  </StyledHeader>

export default Header