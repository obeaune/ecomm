import { usersList } from './createUserAccount.js';

const removeUserUseCase = (email) => {
    const userObject = usersList.find(el => el.email === email);
    const indexUser = usersList.indexOf(userObject);
    
    // if exists: indexUser > -1; if don't: indexUser = -1;
    if (indexUser > -1) {
        usersList.splice(indexUser, 1);
        return true
    }
    else {
        return false
    }
};

export default removeUserUseCase;
