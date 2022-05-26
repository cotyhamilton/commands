import { readable, writable } from "svelte/store";
import data from "../data/commands.json";

export const scripts = readable<Script[]>(data.scripts);

export const active = writable<Script[]>(data.scripts);
