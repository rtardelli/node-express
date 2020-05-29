const localStorage = require("./localStorage");

beforeEach(() => {
    localStorage.clearUsers();
});

describe('User storage test', () => {
    test('Initial empty', () => {
        const users = localStorage.getAllUsers();
        expect(users.length).toBe(0);
    });

    test('Add user', () => {
        const user = { id: 1, name: "user1"};

        localStorage.addUser(user);
        let users = localStorage.getAllUsers();
        expect(users.length).toBe(1);

        const user1 = { id: 2, name: "user2"};

        localStorage.addUser(user1);
        users = localStorage.getAllUsers();
        expect(users.length).toBe(2)
    });
});