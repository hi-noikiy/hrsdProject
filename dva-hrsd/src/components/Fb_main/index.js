import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './index.less'

@connect(({ loading, index_tab, ctoc }) => ({
    loading,
    index_tab,
    ctoc
  }))
class Fb_main extends Component {
    render() {
        console.log(123,this.props);
        return (
            <div className={styles.fb_main} >
                Fb_main5
            </div>
        );
    }
}

export default Fb_main;