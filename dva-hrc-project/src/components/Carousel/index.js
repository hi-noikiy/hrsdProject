import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import styles from './index.less';

class Carou extends Component {
    render() {
        
        return (
            <div className={styles.caro} >
                <Carousel autoplay>
                    <div><h3><img src={require('../../assets/timg.jpg')} /></h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>

                {/* <div className='container' >
                    
                </div> */}
            </div>
        );
    }
}

export default Carou;



