const userView = require('./../../app/views/UserView');

describe("Test for UserView", () => {
    test("1. Return an error object when try to create a new user with a null payload", () => {
        const payload = null;
        const result = userView.createUser(payload);
        expect(result.error).toMatch(/Payload no existe/);
    })   

    test("2. Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"};
        const result = userView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })

    test("3. Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"};
        const result = userView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })

    test("4. Create a user by a given valid payload", () => {
        const payload = {username: "username", id: 1, name: "name"};
        const result = userView.createUser(payload);
        expect(result.name).toBe("name");
        expect(result.username).toBe("username");
        expect(result.id).toBe(1);
    })

})