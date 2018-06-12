import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Carousel } from 'antd';

import styles from './index.less';

class Carou extends Component {
    render() {
        
        return (
            <div className={styles.caro} >
                <div className='container' >
                    <Carousel autoplay>
                        <div><h3><img src={require('../../assets/logo.gif')} /></h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Carou;