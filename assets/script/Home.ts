import { _decorator, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Home")
export class Home extends Component {
  start() {}

  jumpToScene(_, scene) {
    director.loadScene(scene);
  }
}
