import React, { Component } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Tabs, Table } from 'antd';
import styles from './index.less'
import './cover_style.less'

const TabPane = Tabs.TabPane;
const operations = <Link to="/">更多</Link>;

const columns = [{
    title: '委托时间',
    dataIndex: 'commission_time',
    width: 100,
  }, {
    title: '类型',
    dataIndex: 'species',
    width: 80,
  }, {
    title: '方向',
    dataIndex: 'direction',
    width: 80,
  }, {
    title: '价格',
    dataIndex: 'price',
    width: 80,
  }, {
    title: '数量',
    dataIndex: 'quantity',
    width: 80,
  }, {
    title: '委托总额',
    dataIndex: 'total_commission',
    width: 80,
  }, {
    title: '成交数量',
    dataIndex: 'number_trans',
    width: 80,
  }, {
    title: '操作',
    dataIndex: 'operating',
    width: 80,
  }];
  
const data1 = [];
for (let i = 0; i < 20; i++) {
    data1.push({
        key: i,
        commission_time: `委托时间 ${i}`,
        species: '类型',
        direction: `${i}`,
        price: `价格. ${i}`,
        quantity: `数量. ${i}`,
        total_commission: `委托总额. ${i}`,
        number_trans: `成交数量. ${i}`,
        operating: `操作. ${i}`,
    });
}
console.log(data1);

class My_tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className={`${styles.ctoc_history_entrust} ctoc_history_entrust`}>
                <Tabs tabBarExtraContent={operations}>

                    <TabPane tab="当前委托" key="1">
                        <Table 
                            columns={columns} 
                            dataSource={data1} 
                            pagination={{ pageSize: 10 }} 
                            scroll={{ y: 150 }} 
                        />
                    </TabPane>

                    <TabPane tab="历史委托" key="2">
                        <Table 
                            columns={columns} 
                            pagination={{ pageSize: 10 }} 
                            scroll={{ y: 150 }} 
                        />
                    </TabPane>

                    <TabPane tab="历史成交" key="3">
                        <Table 
                            columns={columns} 
                            pagination={{ pageSize: 10 }} 
                            scroll={{ y: 150 }} 
                        />
                    </TabPane>

                </Tabs>
            </div>
        )
    }
}
 
export default My_tabs;