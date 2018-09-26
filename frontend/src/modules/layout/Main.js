import React from 'react'
import styled from 'styled-components'
import { color, size } from '../../theme'
import RouteDetails from '../map/RouteDetails'
import withRouteResultsContext from '../../withRouteResultsContext'

const StyledWrapper = styled.section`
  background-color: ${color.background};
  padding: ${size.padding};
  margin-left: ${size.sidebarWidth}
  position: absolute;
  z-index: 1001;
  width: calc(100% - ${size.padding} - ${size.padding} - ${size.sidebarWidth});
  height: calc(100vh - ${size.padding} - ${size.padding});
  color: ${color.text};
`

const Main = ({context}) =>
      <StyledWrapper>
        {!context.results.length === 0 && <RouteDetails />}
        {context.results.length === 0 && <RouteDetails />}
      </StyledWrapper>

export default withRouteResultsContext (Main)