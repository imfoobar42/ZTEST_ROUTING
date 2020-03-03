/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTEST_ROUTING/ZTEST_ROUTING/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});