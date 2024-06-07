class Employee {
    emp_id
    emp_name
    emp_dept
    emp_salary
    emp_company
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
let emp_anil = new Employee(22, "Anil", 'IT', 50000, 'TCS')
let emp_radha = new Employee(33, "Radha", 'HR', 74000, 'wipro')
let emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS")
let emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy")
let emp_monika = new Employee(77, "Monika", "IT", 40000, "TCS")
let emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS")
let emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy")

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`================= Employees Who's company is TCS =================`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_company === "TCS") {
        console.log(`The employee ${employee.emp_name} working in ${employee.emp_company}`);
    }
})
console.log(`================= Employees Who's department is finance =================`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_dept === "Finance") {
        console.log(`The employee working in ${employee.emp_dept} department is ${employee.emp_name}.`);
    }
})
console.log(`================= Employees Who's Name starts with "R" =================`);

arrayEmployees.forEach((employee) => {
    if (employee.emp_name.startsWith("R")) {
        console.log(`The employee "${employee.emp_name}" bearing employee ID "${employee.emp_id}" is working in "${employee.emp_company}" company in the department of "${employee.emp_dept}". Who's salary is "${employee.emp_salary}".`);
    }
})
console.log(`================= Employees Who's salary is greater than 75000 =================`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_salary > 75000) {
        console.log(`Employee Name:${employee.emp_name}, Company:${employee.emp_company} & Salary: ${employee.emp_salary}`);
    }
})

console.log(`================= Employees Who's salary is greater than 50000 and department IT =================`);
arrayEmployees.forEach((employee) => {
    if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
        console.log(`The employee "${employee.emp_name}" bearing employee ID "${employee.emp_id}" is working in "${employee.emp_company}" company in the department of "${employee.emp_dept}". Who's salary is "${employee.emp_salary}".`);
    }
})

// count 6: PRINCE PALEWAR 
// sha key: 51610593ae9b9a4ebc357eb4f7d38ec3e7c3a7a1