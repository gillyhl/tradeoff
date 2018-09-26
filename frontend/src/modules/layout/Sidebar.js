import React from 'react'
import styled from 'styled-components'
import { size, color } from '../../theme'
import RouteResultList from '../map/RouteResultList'

const results = [
  {
    id: 1,
    duration: 145,
    mode: 'WALKING',
    distance: 3.14,
    cost: 217,
    calories: 1000
  },
  {
    id: 2,
    duration: 213,
    mode: 'CHOOCHOO',
    distance: 420,
    cost: 1578,
    calories: 23
  }
]

const StyledSidebar = styled.section`
  position: absolute;
  height: calc(100vh - ${size.headerHeight} - ${size.padding} - ${size.padding});
  max-height: calc(100vh - ${size.headerHeight} - ${size.padding} - ${size.padding});
  overflow-y: scroll;
  width: 20%;
  min-width: 200px;
  z-index: 1001;
  color: ${color.text};
  background-color: ${color.background};
  top: calc(${size.headerHeight} + ${size.padding} + ${size.padding});

`

const Sidebar = () =>
  <StyledSidebar>
    <RouteResultList results={results} />
  </StyledSidebar>

export default Sidebar