/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*global installedChunks $hotChunkFilename$ hotAddUpdateChunk $hotMainFilename$ */
/* eslint-disable no-unused-vars */

module.exports = function() {
	function hotDownloadUpdateChunk(chunkId) {
		var chunk = require("./" + $hotChunkFilename$);
		hotAddUpdateChunk(chunk.id, chunk.modules);
	}

	function hotDownloadManifest() {
		try {
			var update = require("./" + $hotMainFilename$);
		} catch (e) {
			return Promise.resolve();
		}
		return Promise.resolve(update);
	}

	function hotDisposeChunk(chunkId) {
		delete installedChunks[chunkId];
	}
};
