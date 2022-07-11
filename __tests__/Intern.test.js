const Intern = require('../lib/Intern');
const intern = new Intern('Steven','n/a','gerbertSteven18@gmail.com','Harvard');

test('Testing to see if the project can create a new instance of school', () => {
    const testSchool = 'Harvard';
    const employeeInstance = new Intern('Steven', 'n/a', 'gerbertSteven18@gmail.com','Harvard');
    expect(employeeInstance.school).toBe(testSchool);
});

test('Tests if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Steven');
});

test('Tests if we can get the id number from the getId() method', () => {
    expect(intern.getId()).toBe('n/a');
});

test('Tests if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('gerbertSteven18@gmail.com');
});

test('Tests if we can get the role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
test('Tests if we can get the school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('Harvard');
});