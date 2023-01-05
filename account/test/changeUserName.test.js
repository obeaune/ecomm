import changeUserNameUseCase from '../src/use-case/changeUserName.js';
import { usersList } from '../src/use-case/createUserAccount.js';

const findUser = usersList.find(el => el.email === 'grassSword17@ooo.com');
console.log('################ Test1 - Search an existent user/email ##################\n')
console.log(findUser)

const emailThatExists = changeUserNameUseCase('grassSword17@ooo.com', 'JAKE IS THE BEST ONE!!');
console.log('\n\n\n############### Test2 - Change the name ###############\n')
console.log(emailThatExists)

const findUserRenamed = usersList.find(el => el.email === 'grassSword17@ooo.com');
console.log('\n\n\n################ Test3 - Search the renamed user ##################\n')
console.log(findUserRenamed)

const emailThatNotExists = changeUserNameUseCase('iceKingIsTheBESTone@ooo.com', 'Fionna, the human!');
console.log('\n\n\n########### Test4 - Try to rename a non-existent user/email ###########\n')
console.log(emailThatNotExists)
console.log('\n\n')
