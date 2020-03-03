/*global QUnit*/

sap.ui.define([
	"ZTEST_ROUTING/ZTEST_ROUTING/controller/app.controller"
], function (Controller) {
	"use strict";

	QUnit.module("app Controller");

	QUnit.test("I should test the app controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});