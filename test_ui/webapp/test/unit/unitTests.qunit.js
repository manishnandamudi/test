/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI5test/test_ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});