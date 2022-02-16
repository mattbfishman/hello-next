import User from '../../../db/models/UserModel.mjs';
import { generateHashedPassword, checkHashedPassword } from '../../../helpers/password.mjs';
import jwt from 'jsonwebtoken';

const generateUserModel = (req, res) => ({

  mutations: {
    login: (user) => {
      return new Promise (
        async (resolve, reject) => {
          var retUser = await User.findOne({ username: user.username }, (err) => {
            err ? reject(err) : resolve({user})
          }).clone(),
          {password, username} = user,
          hashedPassword = retUser.password,
          {roles, permissions} = retUser,
          passwordCheck = checkHashedPassword(password, hashedPassword),
          refreshSecret = process.env.JWT_REFRESH_SECRET,
          accessSecret = process.env.JWT_ACCESS_SECRET,
          refreshToken, accessToken;
          

          if(!passwordCheck){
            reject((new Error("Username or Password is incorrect")));
          }

          refreshToken = jwt.sign(
            {  username, roles, permissions },
            refreshSecret,
            {
              expiresIn: "7d"
            }
          );

          accessToken = jwt.sign({ username, roles, permissions }, accessSecret, {
            expiresIn: "1hour"
          });

          res.cookie("refresh-token", refreshToken);
          res.cookie("access-token", accessToken);
          
          resolve({username, roles, permissions})

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
              //todo update roles to be a lookup for permissions. Default to admin for now but future setup user roles
              new User({username:username, password: hash, roles: ['admin'], permissions: ["read_any_account", "read_own_account"]}).save((err) => (err ? reject(false) : resolve(true)))
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
