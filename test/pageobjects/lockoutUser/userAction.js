const locator = require("./userLocators");

class louLoginActions{
    
    async login(louname , password) {
        await locator.usernameField.setValue(louname );
        await browser.pause(2000);
        await locator.passwordField.setValue(password);
        await browser.pause(2000);
        await locator.loginButton.click();
        await browser.pause(2000);
    }
    async getErrorMessage() {
        return await locator.errorMessage.getText();
        
    }
}

module.exports = new louLoginActions();