import React from 'react'
import { shallow } from 'enzyme'

import RouteResultList from '../RouteResultList'

it('renders without crashing', () => {
  const wrapper = shallow(<RouteResultList />)
})
