import React from 'react'
import { shallow } from 'enzyme'

import RouteResult from '../RouteResult'

it('renders without crashing', () => {
  const wrapper = shallow(<RouteResult />)
})
