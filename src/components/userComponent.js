import User from "../models/user.js"
import UserService from "../services/userService.js"
import CustomUserValidator from "../core/utilities/validationRules/customValidation/customUserValidator.js"
import { ElasticLogger } from "../core/crossCuttingConcerns/logging/ElasticLogger.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let customUserValidator = new CustomUserValidator();
let userService = new UserService(logger1, customUserValidator);


console.log("User Service Yuklendi ");

console.log(userService.load());