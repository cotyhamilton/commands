import { writable } from 'svelte/store';

const state = {
    tag: writable(''),
    query: writable('')
}

export {
    state
}