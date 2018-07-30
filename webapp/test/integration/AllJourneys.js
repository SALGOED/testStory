/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"S0003072839/testStory/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"S0003072839/testStory/test/integration/pages/Worklist",
	"S0003072839/testStory/test/integration/pages/Object",
	"S0003072839/testStory/test/integration/pages/NotFound",
	"S0003072839/testStory/test/integration/pages/Browser",
	"S0003072839/testStory/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "S0003072839.testStory.view."
	});

	sap.ui.require([
		"S0003072839/testStory/test/integration/WorklistJourney",
		"S0003072839/testStory/test/integration/ObjectJourney",
		"S0003072839/testStory/test/integration/NavigationJourney",
		"S0003072839/testStory/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});