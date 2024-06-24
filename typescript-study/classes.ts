/*
    Classes
        TypeScript offers full support for the class keyword introduced in ES2015.
        As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.
        
        Object oriented programming
            A computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

            Instance? 인스턴스란 객체 지향 프로그래밍(Object Oriented Programming)에서 class에 소속된 개별적인 객체를 말한다.
        
        How TS prevent us having to write so much boiler plate code
*/

/* class Player {
    constructor(
      private firstName:string,
      private lastName: string,
      public nickaname: string,
    ){}
  }
  
  const dong = new Player("dong","suh","동") */
// dong.firstName inavailable

/*
    how to protect field 
      - private : only avaliable inside the abstract class
      - protected : also available the subclass which is extended from the class 
      - public : everybody can use it
*/

abstract class User {
	constructor(protected firstName: string, protected lastName: string, public nickname: string) {}

	abstract getNickName(): void; // abstract method - just a call signature!

	getFullName() {
		// method in an abstract class method? a function inside a class
		return `${this.firstName}${this.lastName}`; // implementation of a method
		// to write an abstract method, you should write the call signature of the method not the implementation
	}
}

class Player extends User {
	getNickName() {
		return `${this.nickname}`; // extending class should create an implementation of the abstract method
	}
} // you can only extend from abstract class and you cannot create a new instance

const dong = new Player("dong", "suh", "동");
// dong.firstName inavailable

dong.getFullName();
dong.nickname;
