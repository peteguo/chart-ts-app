const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = '<div>Hello Koa<div/>'
})

app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`)
})