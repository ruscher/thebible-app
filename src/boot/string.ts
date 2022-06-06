/* eslint-disable func-names */
/* eslint-disable no-extend-native */

import { boot } from 'quasar/wrappers';

declare global {
    interface StringConstructor {
      ucfirst(text: string): string;
      ucwords(text: string): string;
    }

    interface String {
        ucfirst() : string;
        ucwords() : string;
    }
}

export default boot(() => {
  String.prototype.ucfirst = function () {
    const text = String(this);
    return String.ucfirst(text);
  };
  String.prototype.ucwords = function () {
    const text = String(this);
    return String.ucwords(text);
  };
  String.ucfirst = function (text: string) {
    const f = (text ?? '')[0]?.toUpperCase();
    return f ? f + text.slice(1) : '';
  };
  String.ucwords = function (text: string) {
    const separator = [' ', '-'];
    separator.forEach((s) => {
      let keywords = text.split(s);
      keywords = keywords.map((item) => item.ucfirst());
      text = keywords.join(s);
    });
    return text;
  };
});
