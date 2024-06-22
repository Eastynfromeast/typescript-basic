/*
    Call Signature
        let us know how do we call the fn and what return type is
*/

type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;
