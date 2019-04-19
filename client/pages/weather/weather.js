Page({
    onLoad() {
        wx.cloud.callFunction({
            name: 'test',
            data: {
                a: 1,
                b: 2
            }
        })
        .then(res => {
            // 因为 main 的方法实际是个 promisify 的返回，所以可以直接使用 then/catch
            console.log(res)
        })
        .catch(e => {
        })
    }
})