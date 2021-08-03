interface Employeenocomplete{
    firstname?: string;
    lastname?: string;
    code?: number;
    age?: number;
    salary?: number;
    bonus?: boolean;

    }
function createPerson(config: Employeenocomplete): {firstname: string; lastname: string; code?: number; age?: number; salary?: number; bonus?: boolean;}{
    let newEmployee = {firstname: "xxx", lastname: "xxxx",code:999,age:0,salary:0,bonus:true} 
       
    if(config.firstname)
    {
        newEmployee.firstname = config.firstname
    }
    if(config.lastname)
    {
        newEmployee.lastname = config.lastname
    }
    if(config.code)
    {
        newEmployee.code = config.code
    }
    if(config.age)
    {
        newEmployee.age = config.age
    }
    if(config.salary)
    {
        newEmployee.salary = config.salary
    }
    if(config.bonus === true)
    {
        newEmployee.salary = newEmployee.salary * 2.5
       
    }
    return newEmployee
    
    }
    
    let Employee = createPerson({ firstname: "pimmy", lastname: "cute", code: 632110357 ,age: 20 ,salary: 1000000000 ,bonus: true })
    
    console.log(Employee);
   