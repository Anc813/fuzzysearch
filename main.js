//FOR /L %%G IN (1,1,20) DO START node main
url = 'http://detect.wapclick.dev.4-com.pro/?theme=3&os=ios'
//url = 'http://www.mixedcase.nl/articles/2010/11/16/serving-5000-pages-second-django/'
parallel = 2000

request = require('request')
errs = success = 0

console.time('time')

Array.from(Array(parallel).keys()).forEach(e => 
    request(url, (err, resp, body) =>  {
        if (!err && resp.statusCode == 200) {
            console.log('success', ++success, body.length, 'errs:', errs)
        } else {
            console.log('err:',++errs, resp && resp.statusCode, err)
        }
    })
)

process.on('exit', e => console.timeEnd('time'));