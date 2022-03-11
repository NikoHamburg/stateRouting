import { Lightning } from "@lightningjs/sdk";

class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xffff0000,
      alpha: 0,
      Text: {
        text: {
          color: 0xffffffff,
          text: "Home",
        },
      },
    };
  }

  _focus() {
    this.alpha = 1;
  }

  _unfocus() {
    this.alpha = 0;
  }
}

export { Home };
