import React from 'react'
import {Provider} from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import List from './list'
import SearchImgur from './searchImgur'

const NoMatch = () => (
  <p>No Match could Be Found</p>
);

const App = ({store}) => (
	<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={List}>
        <Route path="imgur" component={SearchImgur}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
	</Provider>
)

export default App
