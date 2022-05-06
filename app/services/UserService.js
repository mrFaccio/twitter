const User = require('./../models/User');

class userService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }

    static updateUsername(user, username) { 
        user.username = username;
    }
    
    // Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la
    // clase `User`, y regresará la lista de todos los usernames de dichos objetos
    
    static getAllUsernames(users) { 
        return users.map(user => user.username);
    }
}

module.exports = userService;
