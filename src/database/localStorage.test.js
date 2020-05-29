const localStorage = require("./localStorage");

beforeAll(() => {
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

    test('get user', () => {
        const user = localStorage.getUser(1);
        expect(user).not.toBe(null);
        expect(user.name).toBe("user1");
    });

    test('update user', () => {
        const user = localStorage.getUser(1);
        user.name = "othername";
        localStorage.updateUser(user);

        const user2 = localStorage.getUser(1);
        expect(user2).not.toBe(null);
        expect(user2.name).toBe("othername");
    });

    test('delete user', () => {
        let users = localStorage.getAllUsers();
        expect(users.length).toBe(2)

        localStorage.deleteUser(1);
        
        users = localStorage.getAllUsers();
        expect(users.length).toBe(1)

        const user2 = localStorage.getUser(2);
        expect(user2).not.toBe(null);
        expect(user2.name).toBe("user2");
    });
});