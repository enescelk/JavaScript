import { Users } from "../data/users.js"
import { DataError, ValidationError } from "../models/Error.js"

export default class UserService {
    constructor(loggerService, validatorService) {
        this.validatorService = validatorService;
        this.loggerService = loggerService;
        this.errors = []
        this.users = [];
    }

    load() {
        this.users = users.filter((user) => user.type === "user");
    }

    getAll() {
        return this.Users;
    }

    add(user) {
        let result = this.validatorService.validate(user);

        if (result.length > 0) {
            this.loggerService.log(user);
        } else {
            this.users.push(user);
        }
    }



    getBySorted() {
        return this.users.sort((user1, user2) => {
            if (user1.firstName > user2.firstName) {
                return 1;
            } else if (user1.firstName === user2.firstName) {
                return 0;
            } else {
                return -1;
            }
        });
    }

    // Customer Services
    // listCustomers() {
    //     return this.customers
    // }

    // getCustomerById(id) {
    //     return this.customers.find(u => u.id === id)
    // }

    // getCustomersSorted() {
    //     return this.customers.sort((customer1, customer2) => {
    //         if (customer1.firstName > customer2.firstName) {
    //             return 1;
    //         } else if (customer1.firstName === customer2.firstName) {
    //             return 0;
    //         } else {
    //             return -1
    //         }
    //     })
    // }

}