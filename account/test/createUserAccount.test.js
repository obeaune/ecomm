import { usersList, createUserUseCase } from '../src/use-case/createUserAccount.js';

console.log('#################### Test1 ######################')
console.log('List of users before adding a new one: \n');
console.log(usersList);

console.log('\n#################### Test2 ######################')
const newUser = createUserUseCase('Peppermint Butler', 'occultistBaby6@ooo.com', 'v4mp1r3K1ng!');
console.log('Create new user: \n');
console.log(newUser);

console.log('\n#################### Test3 ######################')
console.log('Updated list: \n');
console.log(usersList);
