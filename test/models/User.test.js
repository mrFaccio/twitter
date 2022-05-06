const User = require('./../../app/models/User');

describe("Unit Tests for User Class", () => {
    test("Create an User object ", () => {
        //Aquí se invoca el código que se va a usar en la app 
        const user = new User(1, "lenfaccio", "Lenin", "bio")

        //Aquí se valida los resultados del código 
        expect(user.id).toBe(1);
        expect(user.username).toBe("lenfaccio");
        expect(user.name).toBe("Lenin");
        expect(user.bio).toBe("bio");
        expect(user.dateCreated).not.toBeUndefined(); //verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add getters', () => {
        const user = new User(1, "lenfaccio", "Lenin", "bio");
        expect(user.getUsername).toBe("lenfaccio");
        expect(user.getBio).toBe("bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    })

    test('Add setters', () => {
        const user = new User(1, "lenfaccio", "Lenin", "bio");
        user.setUsername = 'faccio'
        expect(user.username).toBe("faccio");

        user.setBio = 'New bio'
        expect(user.bio).toBe("New bio")
    });
})
