import searchUserAccountByEmailUseCase from '../src/use-case/searchUserAccountByEmail.js';

const emailThatExists = searchUserAccountByEmailUseCase('bloodAndGuitars@ooo.com');
console.log('#################### Test1 - Find a user by email ######################\n')
console.log(emailThatExists)

const emailThatNotExists = searchUserAccountByEmailUseCase('iceKingIsTheBESTone@ooo.com');
console.log("\n\n\n#################### Test2 - Don't find a user by email ######################\n")
console.log(emailThatNotExists)
console.log('\n\n')
