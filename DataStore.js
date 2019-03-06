const electron = require('electron');
const fs = require('fs');
const path = require('path');

/**
  * @class DataStore
 * The DataStore class contains methods for reading and writing to local storage on a user's device
*/

class DataStore {
  constructor(options) {
    const dataPath = (electron.app.getPath('userData') || electron.remote.app.getPath('userData'));

    this.path = path.join(dataPath, options.configName + '.json');
    this.data = this.parseInitialData(this.path, options.defaults);
  }

  /**
    * Retrieves data from local storage
    * @param {object} key - The key to the data in the JSON file
    * @returns {object}
  **/

  getData(key) {
    return this.data[key];
  }

  /**
    * Writes data to local storage
    * @param {object} key - The key to the data in the JSON file
    * @param {object} value - The value to be inserted
  **/

  setData(key, value) {
    this.data[key] = value;

    try {
      fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
    catch (error) {
      console.log('Write operation could not be done. \n' + error);
    }
  }

  /**
    * Retrieves initial data from local storage
    * @param {string} path - The path to local storage
    * @param {object} defaults - The default object
    * @returns {object}
  **/

  parseInitialData(path, defaults) {
    try {
      return JSON.parse(fs.readFileSync(path));
    }
    catch (error) {
      return defaults;
    }
  }
}

module.exports = DataStore;
