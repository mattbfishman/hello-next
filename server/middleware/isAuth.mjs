import pkg from 'jsonwebtoken';
const { verify } = pkg;

var isAuth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    console.log(authHeader);
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    if (!token || token === ''){
        req.isAuth = false;
        return next();
    }

    let decodedToken;
    try {
        const accessSecret = process.env.JWT_ACCESS_SECRET;
        decodedToken = verify(token, accessSecret);
    } catch (err) {
        req.isAuth = false;
        return next();
    }

    if(!decodedToken) {
        req.isAuth = false;
        return next();
    }

    req.isAuth = true;
    // console.log(decodedToken);
    next();
}

export default isAuth;