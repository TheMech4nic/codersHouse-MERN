const jwt = require('jsonwebtoken');
const refreshModel = require('../models/refresh-model');
const accessTokenSecret = process.env.JWT__ACCESSTOKEN__SECRET;
const refreshTokenSecret = process.env.JWT__REFRESHTOKEN__SECRET;

class TokenService {
    generateTokens(payload){
        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '1h'
        } )

        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: '1y'
        } )

        return { accessToken, refreshToken}
    }

    async storeRefreshToken(token, userId) {
        try {
            await refreshModel.create({
                token,
                userId,
            })
        } catch(err){
             console.log(err.message)
        }
    }
}

module.exports = new TokenService();