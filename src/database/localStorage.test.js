const localStorage = require("./localStorage");

beforeAll(() => {
    localStorage.clearUsers();
    localStorage.clearStores();
    localStorage.clearStaff();
    localStorage.clearServices();
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

describe('Staff storage test', () => {
    test('Initial empty', () => {
        const staffs = localStorage.getAllStaffs();
        expect(staffs.length).toBe(0);
    });

    test('Add staff', () => {
        const staff = { id: 1, name: "staff1"};

        localStorage.addStaff(staff);
        let staffs = localStorage.getAllStaffs();
        expect(staffs.length).toBe(1);

        const staff1 = { id: 2, name: "staff2"};

        localStorage.addStaff(staff1);
        staffs = localStorage.getAllStaffs();
        expect(staffs.length).toBe(2)
    });

    test('get staff', () => {
        const staff = localStorage.getStaff(1);
        expect(staff).not.toBe(null);
        expect(staff.name).toBe("staff1");
    });

    test('update staff', () => {
        const staff = localStorage.getStaff(1);
        staff.name = "othername";
        localStorage.updateStaff(staff);

        const staff2 = localStorage.getStaff(1);
        expect(staff2).not.toBe(null);
        expect(staff2.name).toBe("othername");
    });

    test('delete staff', () => {
        let staffs = localStorage.getAllStaffs();
        expect(staffs.length).toBe(2)

        localStorage.deleteStaff(1);
        
        staffs = localStorage.getAllStaffs();
        expect(staffs.length).toBe(1)

        const staff2 = localStorage.getStaff(2);
        expect(staff2).not.toBe(null);
        expect(staff2.name).toBe("staff2");
    });
});

describe('Service storage test', () => {
    test('Initial empty', () => {
        const services = localStorage.getAllServices();
        expect(services.length).toBe(0);
    });

    test('Add service', () => {
        const store = { id: 1, name: "store1"};
        localStorage.addStore(store);

        const staff = { id: 1, name: "staff1"};
        localStorage.addStaff(staff);

        const user = { id: 1, name: "user1"};
        localStorage.addUser(user);
        
        const service = { id: 1, name: "service1", userID: 1, storeID: 1, staffID: 1};
        localStorage.addService(service);

        let services = localStorage.getAllServices();
        expect(services.length).toBe(1);

        const service1 = { id: 2, name: "service2", userID: 1, storeID: 1, staffID: 1};

        localStorage.addService(service1);
        services = localStorage.getAllServices();
        expect(services.length).toBe(2)
    });

    test('get service', () => {
        const service = localStorage.getService(1);
        expect(service).not.toBe(null);
        expect(service.name).toBe("service1");
    });

    test('update service', () => {
        const service = localStorage.getService(1);
        service.name = "othername";
        localStorage.updateStaff(service);

        const service2 = localStorage.getService(1);
        expect(service2).not.toBe(null);
        expect(service2.name).toBe("othername");
    });

    test('delete service', () => {
        let services = localStorage.getAllServices();
        expect(services.length).toBe(2)

        localStorage.deleteService(1);
        
        services = localStorage.getAllServices();
        expect(services.length).toBe(1)

        const service2 = localStorage.getService(2);
        expect(service2).not.toBe(null);
        expect(service2.name).toBe("service2");
    });

    test('get service by user', () => {
        let services = localStorage.getAllServices();
        expect(services.length).toBe(1)
        
        const store = { id: 1, name: "store1"};
        const staff = { id: 1, name: "staff1"};
        const user = { id: 1, name: "user1"};
        const user2 = { id: 2, name: "user2"};

        const service3 = { id: 3, name: "service3", userID: 1, storeID: 1, staffID: 1};
        localStorage.addService(service3);
        const service4 = { id: 4, name: "service4", userID: 2, storeID: 2, staffID: 2};
        localStorage.addService(service4);

        services = localStorage.getAllServices();
        expect(services.length).toBe(3)
      
        services = localStorage.getServicesByUserID(1);
        expect(services.length).toBe(2);
        services = localStorage.getServicesByUserID(2);
        expect(services.length).toBe(1);
    });

    test('get service by store', () => {
        services = localStorage.getAllServices();
        expect(services.length).toBe(3)
      
        services = localStorage.getServicesByStoreID(1);
        expect(services.length).toBe(2);
        services = localStorage.getServicesByStoreID(2);
        expect(services.length).toBe(1);
    });

    test('get service by staff', () => {
        services = localStorage.getAllServices();
        expect(services.length).toBe(3)
      
        services = localStorage.getServicesByStaffID(1);
        expect(services.length).toBe(2);
        services = localStorage.getServicesByStaffID(2);
        expect(services.length).toBe(1);
    });
});