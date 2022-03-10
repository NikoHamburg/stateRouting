/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from "@lightningjs/sdk";
import { About } from "./components/About";
import { Home } from "./components/Home";
// import { Menu } from "./components/menu/Menu";

class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      Home: {
        alpha: 0,
        type: Home,
      },
      About: {
        alpha: 0,
        type: About,
      },
      // Menu: {
      //   y: -200,
      //   type: Menu,
      // },
    };
  }

  static _states() {
    return [
      class Home extends this {
        $enter() {
          this.tag("Home").alpha = 1;
        }
        $exit() {
          this.tag("Home").alpha = 0;
        }
      },
      class About extends this {
        $enter() {
          this.tag("About").alpha = 1;
        }
        $exit() {
          this.tag("About").alpha = 0;
        }
      },
      // class Menu extends this {
      //   $enter() {
      //     this.tag("Menu").y = 0;
      //   }
      //   $exit() {
      //     this.tag("Menu").y = -200;
      //   }
      // },
    ];
  }

  _handleLeft() {
    this._setState("Home");
  }

  _handleRight() {
    this._setState("About");
  }

  // _handleDown() {
  //   this._setState("Menu");
  // }
}

export { App };
