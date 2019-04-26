/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from 'Route';
import store from 'Store';
import 'Style/main';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );
    }
}

export default App;
