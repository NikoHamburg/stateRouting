import { Lightning } from "@lightningjs/sdk";

class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xffff0000,
      Text: {
        text: {
          color: 0xffffffff,
          text: "Home",
        },
      },
    };
  }
}

export { Home };
