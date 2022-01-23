import User from '../../../db/models/UserModel.mjs';
import { generateHashedPassword, checkHashedPassword } from '../../../helpers/password.mjs';
import jwt from 'jsonwebtoken';

const generateUserModel = (req, res) => ({

  mutations: {
    login: (user) => {
      return new Promise (
        async (resolve, reject) => {
          var retUser = await User.findOne({ username: user.username }, (err) => {
            err ? reject(err) : resolve({username: user.username, passwordHash: user.password})
          }).clone(),
          password = user.password || '',
          username = user.username || '',
          count = user.count || 1,
          hashedsPassword = retUser.password || '',
          passwordCheck = checkHashedPassword(password, hashedsPassword),
          refreshSecret = process.env.JWT_REFRESH_SECRET,
          accessSecret = process.env.JWT_ACCESS_SECRET,
          refreshToken, accessToken;
          

          if(!passwordCheck){
            reject((new Error("Username or Password is incorrect")));
          }

          refreshToken = jwt.sign(
            { payload: { username: username, count: count } },
            refreshSecret,
            {
              expiresIn: "7d"
            }
          );

          accessToken = jwt.sign({ userId: user.id }, accessSecret, {
            expiresIn: "15min"
          });

          res.cookie("refresh-token", refreshToken);
          res.cookie("access-token", accessToken);
          
          resolve({username: username})

        }
      )
    },
    register: (user) => {
      return new Promise(
        async (resolve, reject) => {
        var password = user.password,
              username = user.username,
              hash, 
              exists;

          exists = await User.findOne({ username: username}, (err, data) => {
            if(!data) {
              resolve(true);
            } else if(err) {
              reject(err);
            } else {
              reject(new Error("User exists already"));
            } 
          }).clone();

          if(!exists){
            hash = await generateHashedPassword(password);
            if(hash){
              new User({username:username, password: hash, count: 1}).save((err) => (err ? reject(false) : resolve(true)))
            } else {
              reject(false);
            }
          } else {
            reject(false);
          }
      })
    }
  },
});

export default generateUserModel;
