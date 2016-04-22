module.exports = {
	'akana login' : function (browser) {
		browser
			.url('http://open.soa.dev:8900/atmosphere/#/home/login')
			.waitForElementVisible('body', 5000)
			.waitForElementVisible(".soa-control-cm-textbox-Email", 5000)
			.setValue('.soa-control-cm-textbox-Email', 'administrator@open')
			.setValue('.soa-control-cm-password-Password', 'password')
	},

	'navigate to apis' : function (browser) {
		browser
			.click('.soa-control-cm-login')
			.pause(2000)
			.click('.soa-control-cm-openitem-api')
			.pause(2000);

			browser.jqueryClick("a:contains('Swagger_Petstore1')")
			.pause(2000)
			.assert.containsText('.soa-ui-cm-box-header', 'Swagger_Petstore1')
			.end();
	}
};