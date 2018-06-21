import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Carousel } from 'antd';

import styles from './index.less';

class Carou extends Component {
    render() {
        
        return (
            <div className={styles.caro} >
                    <Carousel autoplay>
                        <div className={styles.img_box1} ></div>
                        <div className={styles.img_box2} ></div>
                    </Carousel>

                {/* <div className='container' >
                    
                </div> */}
            </div>
        );
    }
}

export default Carou;



