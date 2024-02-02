import { _decorator, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Infinite")
export class Infinite extends Component {
  private speed = 500;
  start() {}

  update(dt) {
    const temp = dt * this.speed;

    if(this.bg2.x - temp <= 0) {
      this.bg1.x = this.bg2.x
      this.bg2.x = this.bg1.x + this.bg1.width
    }
    this.bg1.x -= temp;
    this.bg2.x -= temp;
  }
}
