import { validatePresence } from 'shared/validators';

const initMonkeyPathes = () => {
  // eslint-disable-next-line no-extend-native
  Array.prototype.compact = function compact() {
    return this.filter(element => validatePresence(element));
  };
};

export default initMonkeyPathes;
