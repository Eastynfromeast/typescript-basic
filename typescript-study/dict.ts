type Words = {
	[key: string]: string;
};

class Dict {
	private words: Words; // this is how you can create a property
	constructor() {
		this.words = {}; // we initialize it manually
	}
	add(word: Word) {
		if (this.words[word.term] === undefined) {
			this.words[word.term] = word.def;
		}
	}
	def(term: string) {
		return this.words[term];
	}
	del(term: string) {
		if (this.words[term] !== undefined) {
			delete this.words[term];
		}
	}
	update(word: Word) {
		if (this.words.hasOwnProperty(word.term)) {
			this.words[word.term] = word.def;
		}
	}
}

class Word {
	constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
