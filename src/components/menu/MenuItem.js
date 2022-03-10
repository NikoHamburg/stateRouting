import { Lightning } from "@lightningjs/sdk";

class MenuItem extends Lightning.Component {
  static _template() {
    return {
      Label: {
        text: {
          fontSize: 32,
        },
      },
    };
  }

  set label(label) {
    this.tag("Label").text = label;
  }
}

export { MenuItem };
