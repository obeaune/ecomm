import { usersList } from "./createUserAccount.js";

const filterUserByAddressUseCase = (state) => {
    let usersInState = [];
    for (let i = 0; i < usersList.length; i++) {
        const user = usersList[i].address.filter((address) => address.state === state);
        user.forEach(obj => usersInState.push(obj));
    }

    if (usersInState.length === 0) {
        return false
    } else {
        return usersInState
    }
};

export default filterUserByAddressUseCase;
