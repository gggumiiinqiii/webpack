import _ from "lodash";
import "./style/index.css";
import "./style/leo.scss";
import { plus, minus } from "./utils/math";
function createElement() {
  let div = document.createElement("div");
  div.innerHTML = _.join(["my", "name", "is", "leo"], "");
  div.className = "box";
  return div;
}
document.body.appendChild(createElement());
document.writeln("1+2", plus(1, 2));
document.writeln("1-2", minus(1, 2));
