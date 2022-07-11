const Employee = require('../lib/Employee');
const employee = new Employee('Joelle', '5768098', 'jdeschat@gmail.com');

test('Is program capible of creating a new employee?', () => {
    const employeeInstance = new Employee;
    expect(typeof(employeeInstance)).toBe('object');
});

test('Tests if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Joelle');
    expect(employee.id).toBe('5768098');
    expect(employee.email).toBe('jdeschat@gmail.com');
});

test('Tests if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Joelle');
});

test('Tests if we can get the id number from the getId() method', () => {
    expect(employee.getId()).toBe('5768098');
});

test('Tests if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jdeschat@gmail.com');
});

test('Tests if we can get the role from getRole method', () => {
    expect(employee.getRole()).toBe('Employee');
});