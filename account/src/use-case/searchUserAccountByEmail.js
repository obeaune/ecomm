import { usersList } from './createUserAccount.js';

const searchUserAccountByEmailUseCase = (email) => {
    const user = usersList.find(el => el.email === email);

    if (user !== undefined) {
        return `Hurray, user named *${user.name}* was found!`
    } else {
        return `Ops, something is wrong :/ We couldn't find the user owner of this e-mail.`
    }
};

export default searchUserAccountByEmailUseCase;
