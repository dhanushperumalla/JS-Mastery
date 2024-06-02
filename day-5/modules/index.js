// Create a module with a named export and a default export. Import and use them in another file.
import { Name } from "./moduledemo.js";
import show from "./moduledemo.js";

console.log(Name);
show();
