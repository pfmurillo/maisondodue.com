// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace svelteHTML {
		// custom event handlers dispatched by the 'oberve' action
		interface HTMLAttributes {
			'on:enterviewport'?: UIEventHandler<T> | undefined | null;
			'on:leaveviewport'?: UIEventHandler<T> | undefined | null;
		}
	}

	interface Project {
		title: string;
		pictures: string[];
	}

	type Dictionnary = Record<string, string>;

	interface LocalFile {
		default: Dictionnary;
	}

	type Dictionnaries = Record<string, Dictionnary>;
}

export {};
