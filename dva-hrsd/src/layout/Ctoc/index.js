import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Ctoc_head from '../../components/Ctoc_head'
import styles from './index.less'

const { Header, Footer, Sider, Content } = Layout;



@connect(({  }) => ({
    
}))
class Ctoc extends Component {
    render() {
        return (
            <div className={styles.ctoc} >
                <Layout>
                    <Ctoc_head />
                    <Layout>
                        <Content>
                            <Content>
                                top
                            </Content>
                            <Content>
                                bottom
                            </Content>
                        </Content>
                        <Sider>
                            Sider
                        </Sider>
                    </Layout>  
                </Layout>
            </div>
        );
    }
}

export default Ctoc;