const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        
        console.log(`The ${this.position} position is ${this.type} and is available.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);
//use object.keys to fetch the values in key value pair
const keys=Object.keys(job);
console.log(keys);

//use Object.values to fetch the values in key value pair
const key=Object.values(job);
console.log(key);

//use Object.entries to print key value pair
const objext=Object.entries(job);
console.log(objext);


barista.position = "barista";
barista.showDetails();

// use object.freeze for prevent modification
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);



//use object.seal to prevent new  modification but can modify existing properties
const user1= {
    username: 'AzureDiamond',
    password: 'hunter2'
};


const newUser1 = Object.seal(user1);

newUser.password = '*******';
newUser.active = true;

console.log(newUser1);

