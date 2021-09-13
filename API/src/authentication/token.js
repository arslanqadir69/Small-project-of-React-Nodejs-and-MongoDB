const jwt = require('jsonwebtoken');

function genrateToken(userId) {
    jwt.sign({
        userId,
        iat:Math.floor(Date.now()/1000)-30,
        exp:Math.floor(Date.now() / 1000)+ 1000*60
    })
}