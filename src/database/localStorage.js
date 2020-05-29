// User

let storageUsers = [];

exports.getAllUsers = () => {
    return storageUsers;
};

exports.addUser = (user) => {
    storageUsers.push(user);
};

exports.getUser = (userID) => {
    for (let i = 0; i < storageUsers.length; i++) {
        const u = storageUsers[i];
        if (u.id == userID) {
            return u;
        }
    }
};

exports.updateUser = (user) => {
    for (let i = 0; i < storageUsers.length; i++) {
        const u = storageUsers[i];
        if (u.id == user.id) {
            storageUsers[i] = user;
        }
    }
};

exports.deleteUser = (userID) => {
    for (let i = 0; i < storageUsers.length; i++) {
        const u = storageUsers[i];
        if (u.id == userID) {
            storageUsers.splice(i, 1);
            break;
        }
    }
};

exports.clearUsers = () => {
    storageUsers = [];
};

// Store

let storageStores = [];

exports.getAllStores = () => {
    return storageStores;
};

exports.addStore = (store) => {
    storageStores.push(store);
};

exports.getStore = (storeID) => {
    for (let i = 0; i < storageStores.length; i++) {
        const s = storageStores[i];
        if (s.id == storeID) {
            return s;
        }
    }
};

exports.updateStore = (store) => {
    for (let i = 0; i < storageStores.length; i++) {
        const s = storageStores[i];
        if (s.id == store.id) {
            storageStores[i] = store;
        }
    }
};

exports.deleteStore = (storeID) => {
    for (let i = 0; i < storageStores.length; i++) {
        const s = storageStores[i];
        if (s.id == storeID) {
            storageStores.splice(i, 1);
            break;
        }
    }
};

exports.clearStores = () => {
    storageStores = [];
};

// Staff

let storageStaffs = [];

exports.getAllStaffs = () => {
    return storageStaffs;
};

exports.addStaff = (staff) => {
    storageStaffs.push(staff);
};

exports.getStaff = (staffID) => {
    for (let i = 0; i < storageStaffs.length; i++) {
        const s = storageStaffs[i];
        if (s.id == staffID) {
            return s;
        }
    }
};

exports.updateStaff = (staff) => {
    for (let i = 0; i < storageStaffs.length; i++) {
        const s = storageStaffs[i];
        if (s.id == staff.id) {
            storageStaffs[i] = staff;
        }
    }
};

exports.deleteStaff = (staffID) => {
    for (let i = 0; i < storageStaffs.length; i++) {
        const s = storageStaffs[i];
        if (s.id == staffID) {
            storageStaffs.splice(i, 1);
            break;
        }
    }
};

exports.clearStaffs = () => {
    storageStaffs = [];
};

// Service

let storageServices = [];

exports.addService = (service) => {
    storageServices.push(service);
};

exports.getService = (serviceID) => {
    for (let i = 0; i < storageServices.length; i++) {
        const s = storageServices[i];
        if (s.id == serviceID) {
            return s;
        }
    }
};

exports.updateService = (service) => {
    for (let i = 0; i < storageServices.length; i++) {
        const s = storageServices[i];
        if (s.id == service.id) {
            storageServices[i] = service;
        }
    }
};

exports.deleteService = (serviceID) => {
    for (let i = 0; i < storageServices.length; i++) {
        const s = storageServices[i];
        if (s.id == serviceID) {
            storageServices.splice(i, 1);
            break;
        }
    }
};

exports.clearServices = () => {
    storageServices = [];
};

exports.getServicesByUserID = (userID) => {
    let response = [];

    const user = this.getUser(userID);
    if (user) {
        const serviceIDs = user.services;
        for (let i = 0; i < serviceIDs.length; i++) {
            const s = this.getService(serviceIDs[i]);
            if(s){
                response.push(s);
            }
        }

    }
    return response;
};

exports.getServicesByStoreID = (storeID) => {
    // TODO: Implement
};

exports.getServicesByStaffID = (staffID) => {
    // TODO: Implement
};