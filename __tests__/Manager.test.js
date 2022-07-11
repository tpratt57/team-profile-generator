const Manager = require('../lib/Manager');
const manager = new Manager('Daisy', '369187', 'stoneDaisy101@gmail.com', 'A08');

test('Tests if we can get the constructor values for the Manager object', () => {
    expect(manager.name).toBe('Daisy');
    expect(manager.id).toBe('369187');
    expect(manager.email).toBe('stoneDaisy101@gmail.com');
    expect(manager.officeNumber).toBe('A08');
});

test('Tests if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Daisy');
});

test('Tests if we can get the id number from the getId() method', () => {
    expect(manager.getId()).toBe('369187');
});

test('Tests if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('stoneDaisy101@gmail.com');
});

test('Tests if we can get the Office Number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('A08');
});

test('Tests if we can get the role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});