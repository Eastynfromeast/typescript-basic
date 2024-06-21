/*
    # How TypeScript Works
        What TypeScript is?
            TypeScript is **a strongly typed programming language** that builds on JavaScript, giving you better tooling at any scale.
        
        TypeScript protects you from our stupidity
            The protection happens before the TypeScript code turns into JavaScript

*/

const nuri2 = {
	nickname: "nurinu",
};

//nuri.hello() error!

// [1,2,3,4]+false

function divide(a: number, b: number) {
	return a + b;
}

// divide("hello")
//expecting 2 args, but got 1

const player0 = {
	age: 12,
};

//player.age = false;
// Type 'boolean' is not assignable to type 'number'
