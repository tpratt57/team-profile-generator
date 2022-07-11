const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Andrew', '519827', 'jacobs.andrew123@gmail.com', 'aJacobs123');

test('Tests if we can get the constructor values for the Engineer object', () => {
    expect(engineer.name).toBe('Andrew');
    expect(engineer.id).toBe('519827');
    expect(engineer.email).toBe('jacobs.andrew123@gmail.com');
    expect(engineer.GitHub).toBe('aJacobs123')
});

test('Tests if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Andrew');
});

test('Tests if we can get the id number from the getId() method', () => {
    expect(engineer.getId()).toBe('519827');
});

test('Tests if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jacobs.andrew123@gmail.com');
});

test('Tests if we can get the GitHub from getGitHub method', () => {
    expect(engineer.getGitHub()).toBe('aJacobs123');
});

test('Tests if we can get the role from getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});