const userService = require('./../../app/services/UserService');
const User = require('./../../app/services/UserService');

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = userService.create(1, "lenfaccio", "Lenin");
        expect(user.id).toBe(1);
        expect(user.username).toBe("lenfaccio");
        expect(user.name).toBe("Lenin");
        expect(user.bio).not.toBeUndefined();
    });

    test("2. Get all user data in a list", () => {
        const user = userService.create(1, "lenfaccio", "Lenin");
        const userInfoList = userService.getInfo(user)
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("lenfaccio");
        expect(userInfoList[2]).toBe("Lenin");
        expect(userInfoList[3]).toBe("Sin bio");
    })

    test("3. Update username", () => {
        const user = userService.create(1, "lenfaccio", "Lenin");
        userService.updateUsername(user, "faccio");
        expect(user.username).toBe("faccio");
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = userService.create(1, "lenfaccio1", "Lenin");
        const user2 = userService.create(2, "lenfaccio2", "Lenin");
        const user3 = userService.create(3, "lenfaccio3", "Lenin");
        const usernames = userService.getAllUsernames([user1, user2, user3]);
        expect(usernames).toContain("lenfaccio1");
        expect(usernames).toContain("lenfaccio2");
        expect(usernames).toContain("lenfaccio3");
    })
})