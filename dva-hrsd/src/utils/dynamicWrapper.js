import dynamic from 'dva/dynamic';

//把函数放router.js下，修改路径。否则会出现路径不一致的错误
//参数一：app对象。参数二：所需model。参数三：需要绑定model的组件。
function dynamicWrapper (app, models, component) {
    return dynamic({
        app,
        models: () => models.map(m => import(`./models/${m}.js`)),
        component,
    })
}