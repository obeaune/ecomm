import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(13);

const encrypt = (password) => bcrypt.hashSync(password, salt);

const decrypt = (password, hash) => bcrypt.compare(password, hash);

export { encrypt, decrypt };
