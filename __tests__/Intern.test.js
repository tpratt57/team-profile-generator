const Intern = require('../lib/Intern');
const intern = new Intern('Joelle','5768098','jdeschat@gmail.com','Toronto');

test('Testing to see if the project can create a new instance of school', () => {
    const testSchool = 'Toronto';
    const employeeInstance = new Intern('Joelle', '5768098', 'jdeschat@gmail.com','Toronto');
    expect(employeeInstance.school).toBe(testSchool);
});

test('Tests if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Joelle');
});

test('Tests if we can get the id number from the getId() method', () => {
    expect(intern.getId()).toBe('5768098');
});

test('Tests if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jdeschat@gmail.com');
});

test('Tests if we can get the role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
test('Tests if we can get the school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('Toronto');
});