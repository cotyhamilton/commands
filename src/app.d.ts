/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

interface Script {
	script: string;
	description: string;
	tags: string[];
}

interface Tags {
	[key: string]: Script[];
}
