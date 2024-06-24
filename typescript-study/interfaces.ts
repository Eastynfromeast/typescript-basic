/*
  # Interfaces
    types
      type is very very versatile
      types can be whatever you want
    
    interfaces 
      can do only one thing, to specify the shape of an object
      the syntax is closer to Object Oriented Programming
      can be accumulated

*/

// 3. you can use types as type alias
type Nickname = string;
type Health = number;
type Friends = Array<string>;

// 4. you can use it to constrain a type to have specific values
type Team = "red" | "blue" | "yellow";

// 1. you can use type to explain the shape of an object
type TypePlayer = {
	nickname: string;
	healthBar: number;
	team: Team;
};

const dongdong: TypePlayer = {
	nickname: "dongdong",
	healthBar: 0,
	team: "blue",
};

// 2. you can say Food is string
type Food = string;

const mulkimchi: Food = "delicious";

// you can use interface only for specifying a shape of an object
interface IUser {
	nameText: string;
}

interface IPlayer extends IUser {}
