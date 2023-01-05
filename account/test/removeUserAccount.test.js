import removeUserUseCase from '../src/use-case/removeUserAccount.js';
import searchUserAccountByEmailUseCase from '../src/use-case/searchUserAccountByEmail.js';

const emailThatNotExists = removeUserUseCase('iceKingIsTheBESTone@ooo.com');
console.log("########### Test1 - Try to remove a non-existent user/email ###########\n")
console.log(emailThatNotExists)

const emailThatExists = removeUserUseCase('grassSword17@ooo.com');
console.log('\n\n\n########### Test2 - Try to remove an existent user/email ###########\n')
console.log(emailThatExists)

const searchRemovedUser = searchUserAccountByEmailUseCase('grassSword17@ooo.com');
console.log('\n\n\n################ Test3 - Search a removed user/email ##################\n')
console.log(searchRemovedUser)
console.log('\n\n')
