import React from 'react'
import styled from 'styled-components'
import { color, size } from '../../theme'
import RouteDetails from '../map/RouteDetails'
import RouteResultsContext from '../../RouteResultsContext'

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

const Main = () =>
  <RouteResultsContext.Consumer>
    {({results }) => (
      <StyledWrapper>
        {!results.length && <RouteDetails />}
      </StyledWrapper>
    )}
  </RouteResultsContext.Consumer>

export default Main