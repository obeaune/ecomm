import filterUserByAddressUseCase from "../src/use-case/filterUserByAddress.js";

const validState = filterUserByAddressUseCase('AM');
console.log('########### Test1 - Filter with a valid state ###########\n');
console.log(validState);

const invalidState = filterUserByAddressUseCase('RN');
console.log('\n\n\n########### Test2 - Filter with a invalid state ###########\n');
console.log(invalidState);