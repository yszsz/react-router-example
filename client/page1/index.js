import React from 'react';
import { render } from 'react-dom';
import {Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import routes from './pages/routes';

let history = createHistory({
  queryKey: false//去掉hash后缀
})

render((
	<Router routes={routes} history={history} />
), document.getElementById('app'))
