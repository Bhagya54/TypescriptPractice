let empd = {
  id: 101,
  name: 'Raghu',
  position: 'Software Engineer',
  department: 'Development',
  startDate: new Date('2024-01-15'),
  isFullTime: true,
};

let additionalDetails = {
  email: 'raghu@example.com',
  phone: '555-1234',
  manager: 'Priya',
  office: 'Bangalore',
};

let completeEmployee = {
  ...empd,
  ...additionalDetails,
};

console.log('Employee details:', completeEmployee);

let account = {
aNo: 1232,
name: 'Raghu',
balance: 12000,
}
let debit = {
  balancea: 11000,
 debit: 200,
 newBalance(balance:number, debit:number){
  let remaining = (balance-debit)
}
};
console.log(debit);