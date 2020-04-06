/*global QUnit*/

sap.ui.define([
	"UI5test/test_ui/controller/Testview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Testview Controller");

	QUnit.test("I should test the Testview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});