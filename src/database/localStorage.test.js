const localStorage = require("./localStorage");

beforeAll(() => {
    localStorage.clearUsers();
    localStorage.clearStores();
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

describe('Store storage test', () => {
    test('Initial empty', () => {
        const stores = localStorage.getAllStores();
        expect(stores.length).toBe(0);
    });

    test('Add store', () => {
        const store = { id: 1, name: "store1"};

        localStorage.addStore(store);
        let stores = localStorage.getAllStores();
        expect(stores.length).toBe(1);

        const store1 = { id: 2, name: "store2"};

        localStorage.addStore(store1);
        stores = localStorage.getAllStores();
        expect(stores.length).toBe(2)
    });

    test('get store', () => {
        const store = localStorage.getStore(1);
        expect(store).not.toBe(null);
        expect(store.name).toBe("store1");
    });

    test('update store', () => {
        const store = localStorage.getStore(1);
        store.name = "othername";
        localStorage.updateStore(store);

        const store2 = localStorage.getStore(1);
        expect(store2).not.toBe(null);
        expect(store2.name).toBe("othername");
    });

    test('delete store', () => {
        let stores = localStorage.getAllStores();
        expect(stores.length).toBe(2)

        localStorage.deleteStore(1);
        
        stores = localStorage.getAllStores();
        expect(stores.length).toBe(1)

        const store2 = localStorage.getStore(2);
        expect(store2).not.toBe(null);
        expect(store2.name).toBe("store2");
    });
});