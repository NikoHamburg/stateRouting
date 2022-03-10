import { Lightning } from "@lightningjs/sdk";

class About extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff00ff00,
      Text: {
        text: {
          text: "About",
          color: 0xffff00ff,
        },
      },
    };
  }
}

export { About };
