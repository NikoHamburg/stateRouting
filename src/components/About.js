import { Lightning } from "@lightningjs/sdk";

class About extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff00ff00,
      alpha: 0,
      Text: {
        text: {
          text: "About",
          color: 0xffff00ff,
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

export { About };
