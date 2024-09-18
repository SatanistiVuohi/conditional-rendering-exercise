const customers = [
    {fname: 'Tomppa', lname: 'Jutila', age: 35},
    {fname: 'Jaska', lname: 'Jokunen', age: 25},
    {fname: 'Maija', lname: 'Mallikas', age: 45}
]

//const lastNames = customers.map(customer => customer.fname + " " + customer.lname);

const youngCustomers = customers.filter(customer => customer.age < 30).map(c => c.lname);

customers.push ({fname: 'Saatana', lname: 'Helvetti', age: 250000})

const modifiedCustomers = [...customers, {fname: 'Pekka', lname: 'Pekkanen', age: 55}]



youngCustomers.forEach(n => console.log(n));
