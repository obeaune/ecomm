import { usersList } from './createUserAccount.js';

const filterUserByAddressUseCase = (state) => {
    const users = usersList.filter((obj) => obj.address.state === state);
    if (users.length === 0) {
        return false
    } else {
        return users
    }
};

export default filterUserByAddressUseCase;
