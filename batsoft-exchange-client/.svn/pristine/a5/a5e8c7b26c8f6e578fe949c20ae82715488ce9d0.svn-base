import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import styles from './index.less'

const Floa_wind = () => {
    return (
        <div className={styles.floa_window}>
            Floa_window
        </div>
    )
}
@connect(({ Floa_window }) => ({
    Floa_window,
}))
class Floa_window extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Floa_wind} />
                    <Route path="/fb" component={Floa_wind} />
                    <Route path="/events" component={Floa_wind} />
                </Switch>
            </div>
        );
    }
}

export default Floa_window;
{/* <div className={`${styles.floa_window} ${hide}`}> */}