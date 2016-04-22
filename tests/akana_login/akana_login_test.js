module.exports = {
	'akana login' : function (browser) {
		browser
			.url('http://open.soa.dev:8900/atmosphere/#/home/login')
			.waitForElementVisible('body', 5000)
			.waitForElementVisible(".soa-control-cm-textbox-Email", 5000)
			.setValue('.soa-control-cm-textbox-Email', 'administrator@open')
			.setValue('.soa-control-cm-password-Password', 'password')
			.end();
	}
};