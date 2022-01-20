import User from "../../../db/models/UserModel.mjs";
import { generateHashedPassword } from '../../../helpers/password.mjs';

const generateUserModel = () => ({

  mutations: {
    login: (user) =>
    new Promise (
      async (resolve, reject) => {
        await User.findOne({ username: user.username, password: user.password }, (err) => {
          err ? reject(err) : resolve({username: user.username})
        })
      }
    ),
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
