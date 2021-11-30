export class Error {
    constructor(message, data) {
        this.message = message;
        this.data = data;
    }
}


export class DataError extends Error {
    constructor(message, data) {
        super(message, data);
    }
}


export class ValidationError extends Error {
    constructor(message, data) {
        super(message, data);
    }
}