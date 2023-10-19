// snake case: variable naming convention
class Employee {
    emp_id
    emp_name
    emp_dept
    emp_salary
    emp_company
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id =emp_id;
        this.emp_name =emp_name;
        this.emp_dept =emp_dept;
        this.emp_salary =emp_salary;
        this.emp_company =emp_company;

    }
}
let emp_anil = new Employee(22, "Anil",'IT',50000,'TCS')
let emp_radha = new Employee(33, "Radha",'HR',74000,'wipro')

const arrayEmployee = [emp_anil,emp_radha];

arrayEmployee.forEach((employee)=>{
    if(employee.emp_company =="TCS"){
        console.log(`${employee.emp_name,employee.emp_company}`);
    }
})