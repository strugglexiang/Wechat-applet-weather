const cloud = require('wx-server-sdk')

cloud.init()

const main = async(event, context) => {
    const { a, b } = event
    return new Promise((resolve, reject) => {
        resolve({
            result: 3 * parseInt(b),
            wxContext: cloud.getWXContext()
        })
    })
}

exports.main = main