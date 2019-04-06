import React from 'react'
import Link from '../Link'

/* setup test renderer */
import renderer from 'react-test-renderer'

/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import {shallow} from 'enzyme'

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = (new JSDOM('')).window
global.window = window
global.document = window.document

test('Link renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Link page="https://reactjs.org">React</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="https://reactjs.org">React</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link renders the correct elements', () => {
  const wrapper = shallow(
    <Link page="https://reactjs.org">
      <p>React</p>
    </Link>
  );

  expect(wrapper.find('.normal').length).toEqual(1)
  expect(wrapper.find('p').length).toEqual(1)
  expect(wrapper.find('p').first().text()).toEqual('React')
});
