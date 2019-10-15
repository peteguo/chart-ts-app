const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = '<div>Hello Koa<div/>'
})

app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`)
})

作者：zwmmm
链接：https://juejin.im/post/5c90b4115188252d9559136c
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。