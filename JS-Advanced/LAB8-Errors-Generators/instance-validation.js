class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        if(clientId.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number')
        }

        let emailRegex = /[\w]+@[A-Za-z\s]+/g;
        if (!emailRegex.test(email)) {
            throw new TypeError('Invalid e-mail')
        }

        let nameRegex = /[A-Za-z]+/g;

        if(firstName.length < 3 || lastName.length >20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else if(!nameRegex.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        if(lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else if(!nameRegex.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this.clientID= clientId;
        this.email = email;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'AsdS')
//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov');

