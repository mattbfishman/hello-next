import bcrypt from "bcryptjs";
const saltRounds = 10;

const generateHashedPassword = async (password) => {
    return await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
          resolve(hash)
        });
    });
}

const checkHashedPassword = (password = '', hashedPassword = '') => {
  return bcrypt.compareSync(password, hashedPassword);
}

export {  generateHashedPassword, checkHashedPassword };