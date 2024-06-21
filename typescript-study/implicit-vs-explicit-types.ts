/*
   TypeScript combined both way of declaring types, implicit types and explicit types
*/

let a1 = "hello"; //implicit - TS knows a is a string
a1 = "bye";

//a = 1;
// Type number is not assignable to type string

let b1: boolean = false; // explicit - tell TS this variable's type is boolean

let c1: number[] = [];
c1.push(1);

const player1 = {
	name: "nuri",
};

//player.hello();
// TS infered that function hello is not assignable to player1
