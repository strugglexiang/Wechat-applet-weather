const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.end('Hello World!')
})

app.get('/test', (req, res, next) => {
    res.json({
        result: 'Hello World'
    })
})


//------ 监听端口
app.listen(3000, () => console.log('服务已启动，监听3000端口'))