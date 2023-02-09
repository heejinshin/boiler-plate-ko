if(process.env.NODE_ENV === "production"){  // production 일 때 
    module.exports = require('./prod');
} else {
    module.exports = require('./dev')
}