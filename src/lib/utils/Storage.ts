export class Storage {
	static storageKey = '';

	static setKey(key: string) {
		Storage.storageKey = key;
	}

	static get(key = Storage.storageKey) {
		return Storage.has(key) ? JSON.parse(localStorage.getItem(key) || '') : null;
	}

	static set<V>(value: V, key = Storage.storageKey) {
		if (localStorage) localStorage.setItem(key, JSON.stringify(value));
	}

	static has(key = Storage.storageKey) {
		if (localStorage) return !!localStorage.getItem(key);
	}
}
