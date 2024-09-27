//import test from "./test.js";
export default function (x)
{
  fetch("https://cdn.jsdelivr.net/gh/kingcheetah-135/stucco-@branch2/test.json").then((r) => { return r.json() }).then((r) => { console.log(r); })
  //console.log(test(x) * 12);
}
