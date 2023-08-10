// Modules
// Modules 
// "use strict";

 import playGuitar from "./guitar.js"; 
 import { shredding, plucking as fingerPicking} from "./guitar.js";
 import * as Guitars from "./guitar.js"; 
 import User from "./user.js";

 console.log(playGuitar()); 
 console.log(Guitars.shredding());
 console.log(fingerPicking());

 const me = new User("faith@gmail.com", "bobo");
 console.log(me);
 console.log(me.greeting());