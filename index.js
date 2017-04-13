const utils = require('loader-utils');
const rework = require('rework');

module.exports = function reworkLoder(content) {

	const options = utils.getOptions(this);
	const css = rework(content);

	if (options && options.plugins) {

		const plugins = options.plugins.constructor === Array ? options.plugins : [options.plugins];
		plugins.reverse().forEach(
			plugin => {
				if (typeof plugin === 'function') {
					css.use(plugin);
				} else {
					throw new Error('Plugins have to be functions.');
				}
			}
		);
	}

	return css.toString(options);
};
