import pkg from 'jsonwebtoken';
const { verify, sign } = pkg;

var isAuth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    const refreshHeader = req.get('Refresh');
    const accessSecret = process.env.JWT_ACCESS_SECRET;
    const refreshSecret = process.env.JWT_REFRESH_SECRET;

    if(!authHeader && !refreshHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader && authHeader.split(' ')[1];
    const refreshToken = refreshHeader && refreshHeader.split(' ')[1];

    if ((!token || token === '') && (!refreshToken || refreshToken === '')){
        req.isAuth = false;
        return next();
    }
    

    let decodedToken, decodedRefresh;
    try {
        decodedToken = verify(token, accessSecret);
    } catch (err) {}

    try {
        decodedRefresh = verify(refreshToken, refreshSecret);
    } catch (err) {}


    
    if(!decodedToken && !decodedRefresh) {
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        let {username, roles, permissions} = decodedRefresh;
        let accessToken = sign({ username, roles, permissions }, accessSecret, {
            expiresIn: "1hour"
        });
        res.cookie("access-token", accessToken);
    }

    req.isAuth = true;
    next();
}

export default isAuth;