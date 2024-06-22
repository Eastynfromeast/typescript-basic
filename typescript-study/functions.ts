/*
    Call Signature
        let us know how do we call the fn and what is the type of params and return
*/

type AddFn = (a: number, b: number) => number;

// const add: AddFn = (a, b) => a + b;

/*
    # Overloading
        Overloading happens when one function has multiple call signatures


 type Add = {
	(a: number, b: number): number;
	(a: number, b: string): number;
};

const add: Add = (a, b) => {
	if (typeof b === "string") return a;
	return a + b;
}; 

type Config = {
	path: string;
	state: object;
};
type Push = {
	(path: string): void;
	(config: Config): void;
};

const push: Push = config => {
	if (typeof config === "string") console.log(config);
	else {
		console.log(config.path, config.state);
	}
};

type Add = {
	(a: number, b: number): number;
	(a: number, b: number, c?: number): number;
};

const add: Add = (a, b, c?: number) => {
	if (c) return a + b + c;
	return a + b;
};

add (1,2)
add(1,2,3)

*/

/*
    # Polymorphism 다형성
        many different forms or structure
        
    # Generic 
        is kind of placeholder for your type
        and it is generating signature calls on demand for us

*/

type SuperPrint = <T, V>(a: T[], b: V) => T;
// let TS knows this call signature is going to receive generics

const superPrint: SuperPrint = arr => arr[0];

superPrint([1, 2, 3, 4], "x");
superPrint([true, false, true], 1);
superPrint(["a", "b", "c"], false);
superPrint([1, 2, true, false, "hello"], "bye"); // No overload matches this call
