import addUserAddressUseCase from '../src/use-case/addUserAddress.js';
import { usersList } from '../src/use-case/createUserAccount.js';

const findUser = usersList.find(el => el.email === 'grassSword17@ooo.com');
console.log('########### Test1 - Search an existent user/email ###########\n')
console.log(findUser)

const addAddress = addUserAddressUseCase('grassSword17@ooo.com', 'Forest', 2, 'Tree house - Second floor', 'Candy Kingdom', '22222-222', 'Land of Ooo', 'AM');
console.log('\n\n\n################# Test2 - Add address #################\n')
console.log(addAddress)

const findUserWithAddress = usersList.find(el => el.email === 'grassSword17@ooo.com');
console.log('\n\n\n######### Test3 - Search the user with new address #########\n')
console.log(findUserWithAddress)

const emailThatNotExists = addUserAddressUseCase('iceKingIsTheBESTone@ooo.com', 'Iceland', 1000, 'The most beautiful castle', 'ice', '10101-101', 'Ooo', 'CE');
console.log('\n\n\n######### Test4 - Try add address a non-existent user/email #########\n')
console.log(emailThatNotExists)

console.log('\n\n\n################## Test5 - All users ##################\n')
console.log(usersList)
console.log('\n\n')
