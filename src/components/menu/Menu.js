import { Lightning } from "@lightningjs/sdk";
import { MenuItem } from "./MenuItem";

class Menu extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 200,
      color: 0xffaaee99,
      y: -200,
      Items: {
        x: 400,
        Home: {
          type: MenuItem,
          label: "Home",
          x: 200,
        },
        About: {
          type: MenuItem,
          label: "About",
          x: 400,
        },
        Settings: {
          type: MenuItem,
          label: "Settings",
          x: 600,
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

  _handleLeft() {
    console.log(`Left from Menu`);
  }

  _handleRight() {
    console.log(`Right from Menu`);
  }
}

export { Menu };
