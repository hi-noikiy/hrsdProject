import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'react-router-dom';
import Common_header from '../../components/Common_header'
// import Carou from '../../components/Carousel'
// import Main from '../../components/Main'
// import Common_footer from '../../components/Common_footer'
// import Floa_window from '../../components/Floa_window'

class Basic_layout extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Common_header match={this.props.match} />
                {/* <Route path="/" component={Carou} /> */}
                {/* <Route path="/" component={Main} />
                <Route path="/" component={Common_footer} />
                <Route path="/" component={Floa_window} /> */}
            </div>
        );
    }
}

export default Basic_layout;