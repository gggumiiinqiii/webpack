/*
 * @Author: guminqi
 * @Date: 2021-11-19 14:39:51
 * @LastEditTime: 2022-01-28 14:53:46
 * @LastEditors: guminqi
 * @Description:
 */

import "./style/index.css";
import "./style/leo.scss";
import imgsrc from "@/style/1.png";
import { plus, minus } from "./utils/math";
// import _ from "lodash";
// function createElement() {
//   let div = document.createElement("div");
//   div.innerHTML = _.join(["my", "name", "is", "leo"], "");
//   div.className = "box";
//   return div;
// }
//document.body.appendChild(createElement());
function createImg() {
  let img = new Image();
  // imgsrc只能
  img.src = imgsrc;
  return img;
}
[];

document.body.appendChild(createImg());
document.writeln("1+2", plus(1, 2));
document.writeln("1-2", minus(1, 2));
console.log("2");
