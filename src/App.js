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
import { Menu } from "./components/menu/Menu";

class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      Home: {
        type: Home,
      },
      About: {
        type: About,
      },
      Menu: {
        type: Menu,
      },
    };
  }

  static _states() {
    return [
      class Home extends this {
        _getFocused() {
          return this.tag("Home");
        }
      },
      class About extends this {
        _getFocused() {
          return this.tag("About");
        }
      },
      class Menu extends this {
        _getFocused() {
          return this.tag("Menu");
        }
      },
    ];
  }

  _handleLeft() {
    console.log(`Home`);
    this._setState("Home");
  }

  _handleRight() {
    console.log(`About`);
    this._setState("About");
  }

  _handleDown() {
    console.log(`Menu`);
    this._setState("Menu");
  }

  _handleUp() {
    console.log(`Home`);
    this._setState("Home");
  }
}

export { App };
