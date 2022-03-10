import { Lightning } from "@lightningjs/sdk";

class About extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff00ff00,
      text: {
        text: "About",
      },
    };
  }
}

export { About };
