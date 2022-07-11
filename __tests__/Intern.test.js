const Intern = require('../lib/Intern');
const intern = new Intern('joelle','5768098','jdeschat@gmail.com','Toronto');

test('Testing to see if the project can create a new instance of school', () => {
    const testSchool = 'Toronto';
    const employeeInstance = new Intern('Joelle', '5768098', 'jdeschat@gmail.com','Toronto');
    expect(employeeInstance.school).toBe(testSchool);
});