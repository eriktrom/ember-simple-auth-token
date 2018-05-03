import EmberObject from '@ember/object';
import { typeOf } from '@ember/utils';

export default function(defaults) {
  return function(container, config) {
    let wrappedConfig = EmberObject.create(config);

    for (let property in this) {
      if (this.hasOwnProperty(property) && typeOf(this[property]) !== 'function') {
        this[property] = wrappedConfig.getWithDefault(property, defaults[property]);
      }
    }
  };
}
