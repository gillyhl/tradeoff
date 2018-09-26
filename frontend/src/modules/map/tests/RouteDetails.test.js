import React from 'react'
import { shallow } from 'enzyme'

import RouteDetails from '../RouteDetails'

it('renders without crashing', () => {
  const wrapper = shallow(<RouteDetails />)
})
