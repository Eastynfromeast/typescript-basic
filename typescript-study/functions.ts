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
        '제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'

        It is always better to let TS infer the type
*/
/* 
type SuperPrint = <T, V>(a: T[], b: V) => T;
// let TS knows this call signature is going to receive generics

const superPrint: SuperPrint = arr => arr[0]; */

function superPrint<T>(a: T[]) {
	return a[0];
}

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false, "hello"]); // No overload matches this call

type Player2<E> = {
	name: string;
	extraInfo: E;
};

type JaneExtra = {
	favFood: string;
};
type JanePlayer = Player2<JaneExtra>;

const jane: JanePlayer = {
	name: "jane",
	extraInfo: {
		favFood: "Kimchi",
	},
};

const john: Player2<null> = {
	name: "john",
	extraInfo: null,
};

type arrNumber = Array<number>;

let arrA: arrNumber = [1, 2, 3, 4];
