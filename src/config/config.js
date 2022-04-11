const env = 'staging';

const config = {
	dev: require('../config/devconfig.js'),
    staging: require('../config/stagingconfig.js'),
	prod: require('../config/prodconfig.js')
}

module.exports = config[env];
