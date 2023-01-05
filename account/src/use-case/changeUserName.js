import { usersList } from './createUserAccount.js';

const changeUserNameUseCase = (email, newName) => {
    const userObject = usersList.find(el => el.email === email);
    const indexUser = usersList.indexOf(userObject);
    
    if (indexUser > -1) {
        userObject.name = newName;
        usersList.splice(indexUser, 1, userObject);
        return true
    }
    else {
        return false
    }
};

export default changeUserNameUseCase;
