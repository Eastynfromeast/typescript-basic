/* interface SStorage<T> {
	[key: string]: T;
}

class LLocalStorage<T> {
	private storage: SStorage<T> = {} as SStorage<T>;

	set(key: string, value: T) {
		this.storage[key] = value;
	}
	remove(key: string) {
		delete this.storage[key];
	}
	get(key: string): T {
		return this.storage[key];
	}
	clear() {
		this.storage = {};
	}
}

const stringsStorage = new LLocalStorage<string>();
stringsStorage.get("adklfsd");
stringsStorage.set("hello", `${Date.now()}`);

const booleansStorage = new LLocalStorage<boolean>();
booleansStorage.get("false");
booleansStorage.set("xxx", true); */
