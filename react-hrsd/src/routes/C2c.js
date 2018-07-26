import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Common_header from '../components/Common_header'

class C2c extends Component {
    render() { 
        console.log(this.props)
        return (  
            <div>
                <Common_header style={'black'} />
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}
 
export default C2c;
