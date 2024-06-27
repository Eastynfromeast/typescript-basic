/*
    타입스크립트의 클래스를 이용하여 Dict (사전. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

add: 단어를 추가함.
get: 단어의 정의를 리턴함.
delete: 단어를 삭제함.
update: 단어를 업데이트 함.
showAll: 사전 단어를 모두 보여줌.
count: 사전 단어들의 총 갯수를 리턴함.
upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
*/

type TWord = {
	[key: string]: string;
};

class Dict {
	private words: TWord;
	constructor() {
		this.words = {};
	}
	add(word: Word) {
		if (this.words[word.term] === undefined) {
			this.words[word.term] = word.def;
		}
	}
	get(term: string) {
		if (this.words[term] !== undefined) {
			return this.words[term];
		} else {
			console.log(`${term}은 존재하지 않는 단어입니다.`);
			return false;
		}
	}
	delete(term: string) {
		if (this.words[term] !== undefined) {
			delete this.words[term];
			console.log(`${term}의 삭제가 완료되었습니다.`);
		}
	}
	update(word: Word) {
		if (this.words[word.term] !== undefined) {
			this.words[word.term] = word.def;
		} else {
			console.log(`${word.term}은 존재하지 않는 단어입니다.`);
		}
	}
	showAll() {
		return this.words;
	}
	count() {
		return Object.keys(this.words).length;
	}
	upsert(word: Word) {
		if (this.words[word.term] !== undefined) {
			this.words[word.term] = word.def;
		} else {
			this.add(word);
		}
	}
	exists(term: string) {
		if (this.words[term] !== undefined) {
			console.log(`${term}이 사전 내에 존재합니다.`);
			return true;
		} else {
			console.log(`${term}이 사전 내에 존재하지 않습니다.`);
			return false;
		}
	}
	bulkAdd(words: Word[]) {
		words.forEach(word => {
			this.upsert(word);
		});
	}
	bulkDelete(words: Word[]) {
		words.forEach(word => {
			this.delete(word.term);
		});
	}
}

class Word {
	constructor(public term: string, public def: string) {}
}

const puppy = new Word("dog", "woof woof");
const kitty = new Word("cat", "meow");
const ham = new Word("hamster", "squick");

const buddies = new Dict();

const addPuppy = buddies.add(puppy);
const addKitty = buddies.add(kitty);

const getPuppy = buddies.get("dog");
const deleteHam = buddies.delete("hamster");

kitty.def = "pur pur pur";
const updateKitty = buddies.update(kitty);

const showAllBuddies = buddies.showAll();

const countBuddies = buddies.count();

const ninza = new Word("tortoise", "slow but fast");
const upsertNinza = buddies.upsert(ninza);
ham.def = "ham-to-ri";
const upsertHam = buddies.upsert(ham);

const existsNinza = buddies.exists(ninza.term);

const newBuddies = [
	{ term: "pony", def: "short legs" },
	{ term: "racoon", def: "chubby" },
];
const bulkAddBuddies = buddies.bulkAdd(newBuddies);

const bulkDeleteBuddies = buddies.bulkDelete(newBuddies);
