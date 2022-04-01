import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {renderRoutes} from './routes';

ReactDOM.render(
    renderRoutes(), document.getElementById('app-content')
)

// Meteor.startup(() => {
//     render(renderRoutes(), document.getElementById('app-content'));
// });
