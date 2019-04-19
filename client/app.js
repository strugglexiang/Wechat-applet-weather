App({
    onLaunch() {
        wx.cloud.init({
            env: 'weather-e53973'
        })
    }
})