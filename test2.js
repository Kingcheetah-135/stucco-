//import test from "./test.js";
export default function (x)
{
  let t = import("./test.js");
  let test = t.default;
  //fetch("./test.json").then((r) => { r.json() }).then((r) => { console.log(r); })
  console.log(test(x) * 12);
}
