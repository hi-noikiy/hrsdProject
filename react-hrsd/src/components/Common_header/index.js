import React, { Component } from 'react'
import { routerRedux, Route, Switch, Link } from 'react-router-dom';
import styles from './index.less'

class Header extends Component {
    render() { 
        const { style } = this.props;
        return (
            <div className={style}>
                <div className="conta_box" >
                    <div className={styles.header_l} >
                        <div>
                            <Link to="/">
                                <img src={require('../../assets/logo.gif')} />
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <Link to="/" >首页</Link>
                            </li>
                            <li>
                                <Link to="/c2c" >法币交易</Link>
                            </li>
                            <li>
                                <Link to="/coin" >币币交易</Link>
                            </li>
                            <li>
                                <Link to="/events" >活动</Link>
                            </li>
                        </ul>
                    </div>
    
                    <ul className={styles.header_r} >
                        <li>
                            <Link to="/login" >登录</Link>
                        </li>
                        <li><span>|</span></li>
                        <li>
                            <Link to="/reg" >注册</Link>
                        </li>
                    </ul>
    
                </div>
            </div> 
        );
    }
}

class Common_header extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => {
                    return <Header style={`${styles.header}`} />
                }} />
                <Route path="/c2c" render={() => {
                    return <Header style={`${styles.black_header}`} />
                }} />
                <Route path="/events" render={() => {
                    return <Header style={`${styles.header}`} />
                }} />
                <Route path="/login" render={() => {
                    return <Header style={`${styles.black_header}`} />
                }} />
                <Route path="/reg" render={() => {
                    return <Header style={`${styles.black_header}`} />
                }} />
            </Switch>
        );
    }
}

export default Common_header;


// class Common_header extends Component {
//     render() {
//         console.log(this.props)
//         const { path } = this.props.match;
//         console.log(path)
//         let style;
//         switch (path) {
//             case '/c2c':
//                     style = styles.black_header;
//                 break;
        
//             default:
//                     style = styles.header;
//                 break;
//         }
//         console.log(style)
//         return (
//             <Header style={style} />
//         );
//     }
// }

// export default Common_header;


{/* <Switch>
    <Route exact path="/" render={() => {
        return <Header style={`${styles.header}`} />
    }} />
    <Route path="/c2c" render={() => {
        return <Header style={`${styles.black_header}`} />
    }} />
    <Route path="/events" render={() => {
        return <Header style={`${styles.header}`} />
    }} />
    <Route path="/login" render={() => {
        return <Header style={`${styles.black_header}`} />
    }} />
    <Route path="/reg" render={() => {
        return <Header style={`${styles.black_header}`} />
    }} />
    
</Switch> */}


// let style;
// switch (this.props.style) {
//     case 'black':
//             style = styles.black_header;
//         break;

//     default:
//             style = styles.header;
//         break;
// }
// console.log(style)
// return (
//     <Header style={style} />
// );