// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import ServerEntryPage from './containers/ServerEntryPage';


// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path="/server-entry" component={ServerEntryPage} />
//   </Route>
// );

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
