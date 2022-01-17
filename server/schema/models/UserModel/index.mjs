import User from "../../../db/models/UserModel.mjs";

const generateUserModel = () => ({

  mutations: {
    login: (user) =>
    new Promise(
      async (resolve, reject) => {
        await User.findOne({ username: user.username, password: user.password }, (err) => {
          err ? reject(err) : resolve({username: user.username})
        })
      }
    ),
    register: (user) =>
      new Promise((resolve, reject) => {
        new User(user).save((err, user) => (err ? reject(err) : resolve(user)))
      }
    )
  },
});

export default generateUserModel;
