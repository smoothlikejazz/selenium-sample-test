module.exports = {
	'Navigate to Login' : function (browser) {
		browser
			.url('http://open.soa.dev:8900/atmosphere/#/home/login')
			.waitForElementVisible('body', 5000)
			.waitForElementVisible(".soa-control-cm-textbox-Email", 5000)
			.setValue('.soa-control-cm-textbox-Email', 'administrator@open')
			.setValue('.soa-control-cm-password-Password', 'password')
	},

	'Finish Login And Launch Create API' : function (browser) {
		browser
			.click('.soa-control-cm-login')
			.pause(2000)
			.click('.soa-ui-cm-imgtxt-add-new')
			.pause(2000)
			.click('.soa-control-cm-addnew')
			.pause(2000)
			.click('#soa-control-cm-radio-api-type-api-with-new-service')
			.click('#soa-control-cm-finish')
			.pause(4000);
	},

	'Create New API' : function (browser) {
		browser
			.click('#soa-control-cm-add-api-option-import-dl')
			.setValue('.soa-control-cm-add-api-option-import-dl-option-url-path', 'http://petstore.swagger.io/v2/swagger.json')
			.click('.soa-control-cm-save')
			.pause(4000)
			.assert.containsText('.soa-ui-cm-markdown-it-enabled-preview', 'This is a sample server Petstore server.')
			.end();
	}
};