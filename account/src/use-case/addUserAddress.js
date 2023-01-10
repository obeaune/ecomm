import { usersList } from './createUserAccount.js';

const addUserAddressUseCase = (email, street, number, complement, district, CEP, city, state) => {
    const userObject = usersList.find(el => el.email === email);
    const indexUser = usersList.indexOf(userObject);
    
    if (!userObject) {
        return false
    } else {
        userObject.address = {
            street,
            number,
            complement,
            district,
            CEP,
            city,
            state
        };
        usersList.splice(indexUser, 1, userObject);
        return true;
    }
};

export default addUserAddressUseCase;
