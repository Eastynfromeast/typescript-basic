/*
  현재까지 배운 것을 토대로, 
    1. 아래 함수들에 대한 구현과 함께 
    2. 호출 시그니처(call signatures) 를 작성해주세요
  
  1.last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
  2.prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
  3.mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
  4.count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
  5.findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
  6.slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
*/

//#1 last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type TLast = {
	<T>(arr: T[]): T;
};

const last: TLast = arr => arr[arr.length - 1];

//#2 prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type TPrepend = {
	<T>(arr: T[], item: T): T[];
};

const prepend: TPrepend = (arr, item) => {
	return [...arr, item];
};

//#3 mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type TMix = {
	<T>(a: T[], b: T[]): T[];
};

const mix: TMix = (a, b) => {
	return [...a, ...b];
};

//#4 count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type TCount = {
	<T>(arr: T[]): number;
};

const count: TCount = arr => arr.length;

/*
  #5
    findIndex(arr, item) :
       첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 
       첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 
       존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
  */

type TFindIndex = {
	<T>(arr: T[], item: T): number | null;
};

const findIndex: TFindIndex = (arr, item) => {
	const index = arr.findIndex(elm => elm === item);
	if (index === -1) return null;
	return index;
};
/*
  #6
     slice(arr, startIndex, endIndex): 
     첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 
     첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
  */

type TSlice = {
	<T>(arr: T[], startIndex: number, endIndex?: number): T[];
};

const slice: TSlice = (arr, start, end?) => {
	if (end !== undefined) {
		return arr.slice(start, end);
	}
	return arr.slice(start);
};
