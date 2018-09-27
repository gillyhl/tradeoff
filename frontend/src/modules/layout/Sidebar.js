import React from 'react'
import styled from 'styled-components'
import { size, color } from '../../theme'
import RouteResultList from '../map/RouteResultList'

const StyledSidebar = styled.section`
  position: absolute;
  height: 100vh;
  overflow-y: auto;
  width: 20%;
  min-width: ${size.sidebarWidth};
  z-index: 1001;
  color: ${color.text};
  background-color: ${color.background};
`

const Sidebar = () => (
  <StyledSidebar>
    <RouteResultList />
  </StyledSidebar>
)

export default Sidebar
