import { usersList } from './createUserAccount.js';

const addUserAddressUseCase = (email, street, number, complement, district, CEP, city, state) => {
    const userObject = usersList.find(el => el.email === email);
    const indexUser = usersList.indexOf(userObject);
    
    if (!userObject) {
        return false
    } else {
        const newAddress = {
            street,
            number,
            complement,
            district,
            CEP,
            city,
            state
        };
        usersList[indexUser].address.push(newAddress);
        console.log(usersList[indexUser]);
        return true;
    }
};

export default addUserAddressUseCase;
