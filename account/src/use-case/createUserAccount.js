const usersList = [
    {
        id: 1,
        name: "Finn Mertens",
        email: "grassSword17@ooo.com",
        password: "$2y$10$m06YqT0MuDJFpIc.LOSE9OQyf.TaJGAi08i56xOIix28j.IxjvufW",
        createdDate: "2022-01-14",
        address: [
            {
                street: "Forest",
                number: 1,
                complement: "Tree house",
                district: "Candy Kingdom",
                CEP: "22222-222",
                city: "Land of Ooo",
                state: "AM"
            }
        ]
    },
    {
        id: 2,
        name: "Jake, Sr.",
        email: "myBestFriendIsAHuman@ooo.com",
        password: "$2y$10$HdVmPsEZzR4ZpwDpmv2TpOflYS/fND2dL3r/Skk/mwz04snRASxHu",
        createdDate: "2022-11-11",
        address: [
            {
                street: "Forest",
                number: 1,
                complement: "Tree house",
                district: "Candy Kingdom",
                CEP: "22222-222",
                city: "Land of Ooo",
                state: "AM"
            }
        ]
    },
    {
        name: "Marceline Abadeer",
        email: "bloodAndGuitars@ooo.com",
        password: "$2y$10$MEofmUHQn5LHdBICuuu13Ou4HqwsZRs4foaTFZB/DrAV6MsENRugi",
        createdDate: "2000-01-01",
        address: [
            {
                street: "Cave",
                number: "S/N",
                complement: "S/N",
                district: "Lagoon",
                CEP: "33333-333",
                city: "Land of Ooo",
                state: "AM"
            },
            {
                street: "Dominus vobiscum",
                number: 666,
                complement: "Draw a happy face",
                district: "Nightosphere",
                CEP: "66666-666",
                city: "Underworld",
                state: "AM"
            }
        ]
    }
];

const createUserUseCase = (name, email, password) => {
    const createdDate = new Date().toISOString().substring(0, 10);
    // or just a simple: new ISODate();
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
