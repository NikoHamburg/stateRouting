import { Lightning } from "@lightningjs/sdk";
import { MenuItem } from "./MenuItem";

class Menu extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 200,
      color: 0xffaaee99,
      Items: {
        x: 400,
        Home: {
          type: MenuItem,
          label: "Home",
        },
      },
    };
  }

  _focus() {
    this.patch({
      smooth: {
        y: 0,
      },
      Items: {
        y: 76,
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: {
        y: -200,
      },
    });
  }
}

export { Menu };
