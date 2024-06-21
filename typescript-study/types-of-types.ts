/*
    Sometime, it is better to let TS infer the type automatically
    ? means it can be undefined

    How you can specify the return type of a function 
    function fnName(arg:type):type{}

    readonly
        just put "readonly" before the type you want not to insert the value

    any is the type when you use to escape from TypeScript
        suggest not to use any to be in the protection from TS
*/

type Age = number;

type Player = {
	readonly name: string;
	age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
/* function playerMaker(name: string): Player {
	return {
		name,
	};
} */

const testPlayer = playerMaker("nico");
testPlayer.age = 1;

const numberArr: readonly number[] = [1, 2, 3, 4, 5];
// numberArr.push(0)

const exArr: [string, number, boolean] = ["nuri", 3, true];
// set minimum amount of elements

let d: undefined = undefined;
let e: null = null;
