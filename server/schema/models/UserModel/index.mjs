import User from "../../../db/models/UserModel.mjs";
import { generateHashedPassword, checkHashedPassword } from '../../../helpers/password.mjs';

const generateUserModel = () => ({

  mutations: {
    login: (user) => {
      return new Promise (
        async (resolve, reject) => {
          var retUser = await User.findOne({ username: user.username }, (err) => {
            err ? reject(err) : resolve({username: user.username, passwordHash: user.password})
          }).clone(),
          password = user.password || '',
          username = user.username || '',
          hashedsPassword = retUser.password || '',
          passwordCheck = checkHashedPassword(password, hashedsPassword);

          if(passwordCheck){
            resolve({username: username})
          } else {
            reject((new Error("Username or Password is incorrect")));
          }
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
              new User({username:username, password: hash}).save((err) => (err ? reject(false) : resolve(true)))
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
