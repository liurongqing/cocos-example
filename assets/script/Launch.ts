import { _decorator, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Launch")
export class Launch extends Component {
  start() {
    // director.loadScene("home");
    director.loadScene("infinite");
  }
}
