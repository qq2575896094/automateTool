/**
 *  Created by 雨田 on 2016/11/18.
 */

module.exports = {
    path:'/menus',
    options:{
        target: 'http://59.110.20.188:80'         // target host
        // changeOrigin: true,                 // needed for virtual hosted sites  可选
        // ws: false                           // proxy websockets  可选
        // pathRewrite: {                      //重写path   可选
        //     '^/api/old-path': '/api/new-path',     // rewrite path
        //     '^/api/remove/path': '/path'           // remove base path
        // },
        // router: {
        //     when request.headers.host == 'dev.localhost:3000',
        //     override target 'http://www.example.org' to 'http://localhost:8000'
            // 'dev.localhost:3000': 'http://localhost:8000'
        // }
    }
};