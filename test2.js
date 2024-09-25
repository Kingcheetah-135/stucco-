//import test from "./test.js";
export default function (x)
{
  fetch("./test.json").then((r) => { return r.json() }).then((r) => { console.log(r); })
  //console.log(test(x) * 12);
}
