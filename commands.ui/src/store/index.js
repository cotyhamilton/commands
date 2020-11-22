import { writable } from 'svelte/store';
import { API } from './config.js';

const state = {
    tag: writable(''),
    query: writable('')
}

export {
    API,
    state
}