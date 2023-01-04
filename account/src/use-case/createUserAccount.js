const usersList = [
    {
        id: 1,
        name: 'Finn, the Human',
        email: 'grassSword17@ooo.com',
        password: 'huntressWizardS2',
        createdDate: '2022-01-14',
    },
    {
        id: 2,
        name: 'Jake, the Dog',
        email: 'myBestFriendIsAHuman@ooo.com',
        password: 'onionCheeseLobsterSoul99',
        createdDate: '2022-11-11',
    },
    {
        id: 3,
        name: 'Marceline, the Vampire Queen',
        email: 'bloodAndGuitars@ooo.com',
        password: 'bonnie0and0me',
        createdDate: '2000-01-01',
    }
];

const createUserUseCase = (name, email, password) => {
    const createdDate = new Date().toISOString().substring(0, 10);
    const user = {
        id: usersList.length + 1,
        name,
        email,
        password,
        createdDate
    };

    usersList.push(user);

    return user;
};

export { usersList, createUserUseCase };
