// import increase from './counter.js' // export default일때
// import increase1 from './counter.js' // export default일때
// import { increase } from './counter.js'
// import { increase as increase1} from './counter.js'
// import { increase, getCount } from './counter.js'
import * as counter from './counter.js'
// console.log(count);
counter.increase();
// console.log(count);
// count = -10;
// console.log(count);
counter.increase();
counter.increase();
const count = counter.getCount();
console.log(count);