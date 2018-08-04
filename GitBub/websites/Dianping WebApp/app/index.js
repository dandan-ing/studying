import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RouteMap from 'Router/routeMap'
import configureStore from 'Store/configureStore'

import 'Static/common/css/Icon.css'

const store = configureStore();
render(
    <Provider store={store}>
        <RouteMap/ >
    </Provider>,
    document.getElementById('root')
)