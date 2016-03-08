import React from 'react'
import {Provider} from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import List from './list'
import SearchInstagram from './searchInstagram'

const NoMatch = () => (
  <p>No Match could Be Found</p>
);

const App = ({store}) => (
	<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={List}>
        <Route path="instagram" component={SearchInstagram}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
	</Provider>
)

export default App
