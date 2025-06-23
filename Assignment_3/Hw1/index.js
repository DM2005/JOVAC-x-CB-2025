const employees = [
  { name: "Aarav",   age: 22, salary: 32000, experience: 1 },
  { name: "Bhavya",  age: 25, salary: 41000, experience: 2 },
  { name: "Charan",  age: 29, salary: 55000, experience: 4 },
  { name: "Diya",    age: 24, salary: 36000, experience: 2 },
  { name: "Eshan",   age: 31, salary: 62000, experience: 6 },
  { name: "Falak",   age: 27, salary: 48000, experience: 3 },
  { name: "Girish",  age: 34, salary: 71000, experience: 9 },
  { name: "Himani",  age: 28, salary: 51000, experience: 4 },
  { name: "Ishaan",  age: 26, salary: 43000, experience: 3 },
  { name: "Jiya",    age: 23, salary: 35000, experience: 1 },
  { name: "Kabir",   age: 35, salary: 75000, experience:10 },
  { name: "Lavanya", age: 30, salary: 60000, experience: 5 },
  { name: "Madhav",  age: 33, salary: 68000, experience: 8 },
  { name: "Naina",   age: 29, salary: 54000, experience: 4 },
  { name: "Om",      age: 24, salary: 37000, experience: 2 },
  { name: "Pari",    age: 32, salary: 65000, experience: 7 },
  { name: "Qasim",   age: 28, salary: 50000, experience: 4 },
  { name: "Riya",    age: 27, salary: 46000, experience: 3 },
  { name: "Shaurya", age: 31, salary: 63000, experience: 6 },
  { name: "Tanvi",   age: 26, salary: 42000, experience: 2 }
];
// reduce working....

  //total salary
const totsalary= employees.reduce((acc,curr) => 
    acc=acc+curr.salary,0);

  // Avg yrs of exp
const avgEx=employees.reduce((acc,curr) => 
    acc=acc+curr.experience,0)/employees.length;

// filter working....

  // Staff with ≥ 5 years experience
const seniorstaff=employees.filter(employees => employees.experience>=5);
  // Salaries above ₹60 000
const highEarners = employees.filter(employees => employees.salary > 60000);

// map working....
  // List of names
const names = employees.map(employees => employees.name);


console.log("Total payroll :", totsalary);
console.log("Avg exp (yrs) :", avgEx);
console.log("Senior staff  :", seniorstaff.map(e => e.name));
console.log("High earners  :", highEarners.map(e => e.name));