const Employee = require('../lib/Employee');
const emplpoyee = new Employee('Joelle', '5768098', 'jdeschat@gmail.com');

test('Is program capible of creating a new employee?', () => {
    const employeeInstance = new Employee;
    expect(typeof(employeeInstance)).toBe('object');
});

test('Tests if we can get the constructor values for the employee object', () => {
    expect(emplpoyee.name).toBe('Joelle');
    expect(employee.id).toBe('5768098');
    expect(employee.email).toBe('jdeschat@gmail.com');
});