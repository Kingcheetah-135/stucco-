//import test from "./test.js";
export default function (x)
{
  import("./test.js").then((t) => { return t.default; }).then((test) =>
  {
    console.log(test(x) * 12);
  });
  //fetch("./test.json").then((r) => { r.json() }).then((r) => { console.log(r); })
}
