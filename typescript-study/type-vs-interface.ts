// blue print of other classes should follow
// still remains on the JS file
abstract class TUser {
	constructor(protected firstName: string, protected familyName: string) {}
	abstract sayHi(name: string): string;
	abstract fullName(): string;
}

class TPlayer extends TUser {
	fullName() {
		return `${this.firstName} ${this.familyName}`;
	}
	sayHi(name: string) {
		return `Hello, ${name}. My name is ${this.fullName()}`;
	}
}

/*
    Interface disappears when TS compiles the code into JS code -> lighter than types
  */

interface IUser {
	firstName: string;
	familyName: string;
	sayHi(name: string): string;
	fullName(): string;
}

interface IHuman {
	health: number;
}

class IPlayer implements IUser, IHuman {
	constructor(public firstName: string, public familyName: string, public health: number) {}

	fullName() {
		return `${this.firstName} ${this.familyName}`;
	}
	sayHi(name: string) {
		return `Hello, ${name}. My name is ${this.fullName()}`;
	}
}

// you can use interface as a type
function makeUser(user: IUser) {
	return "Hi!";
}

/* makeUser({
	firstName: "Nuri",
	familyName: "Jung",
	fullName: () => "Nuri Jung",
	sayHi: name => "string",
});
 */

/*
	Polymorphism
*/
