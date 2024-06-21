/*
    Sometime, it is better to let TS infer the type automatically
    ? means it can be undefined

    How you can specify the return type of a function 
*/

let a: number[] = [1, 2];

type Age = number;

type Player = {
	name: string;
	age?: Age;
};

function playerMaker(name: string): Player {
	return {
		name,
	};
}
