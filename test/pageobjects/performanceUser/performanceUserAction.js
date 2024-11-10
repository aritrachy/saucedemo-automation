const performanceUserLocator = require("./performanceUserLocator");

class performanceUserActions {
    async clickOnpgUserName(pgUsername) {
        await performanceUserLocator.pgUserNameField.setValue(pgUsername);
    }
    async clickOnpgUserPassword(password) {
        await performanceUserLocator.pgUserPasswordField.setValue(password);
    }
    async clickOnpgUserLoginButton() {
        await performanceUserLocator.pgUserloginButtonField.click();
    }
    async clickHambrgerOpenMenu() {
        await performanceUserLocator.pgUserhamburgerOpenMenuField.click();
    }

    async clickOnResetAppState() {
        await performanceUserLocator.pgUserResetAppStateLink.click();
    }

    async clickOnHamburgerCloseMenu() {
        await performanceUserLocator.pgUserhamburgerCloseLink.click();
    }

    async clicktoOpenNameFilter() {
        await performanceUserLocator.pgUserOpenNameFilterField.click();
    }
    async selectNamefromFilter() {
        await performanceUserLocator.pgUserSelectNameFromFilter.click();
    }

    // Product Add to cart from the list

    async clickAddtoCartFromList(count) {
        const addToCartButtons = performanceUserLocator.pgUserAddToCartFromList;

        for (let i = 0; i < count; i++) {
            await addToCartButtons[i].click();
        }
    }
    
    async clickOnAddtoCartButton() {
        await performanceUserLocator.pgUserAddtoCartLink.click();
    }

    async clickOnCheckout() {
        await performanceUserLocator.pgUserCheckoutbutton.click();
    }

    async checkOutfirstname(firstName) {
        await performanceUserLocator.pgUserCheckOutFirstName.setValue(firstName);
    }

    async checkOutlastname(lastName) {
        await performanceUserLocator.pgUserCheckOutLastName.setValue(lastName);
    }

    async checkOutpostalcode(postalCode) {
        await performanceUserLocator.pgUserCheckOutPostalCode.setValue(postalCode);
    }

    async clickContinueLink() {
        await performanceUserLocator.pgUserCheckOutToContinueLink.click();
    }

    async getProductNameFromInventory(count) {
        var productNamefromList = performanceUserLocator.pgUsergetProductNamefromInventory;
        const itemNames = [];
        for (let i = 0; i < count; i++) {
            var productName = await productNamefromList[i].getText();
            itemNames.push(productName);

        }
        return itemNames;
    }
    
    async getProductPriceFromInventory(count) {
        var productPricefromList = performanceUserLocator.pgUsergetProductPricefromInventory;
        const itemPrices = [];
        for (let i = 0; i < count; i++) {
            var productPrice = await productPricefromList[i].getText();
            const price = parseFloat(productPrice.replace('$', ''));
            itemPrices.push(price);         
        }
        return itemPrices;
    }

    async getItemTotalPrice() {
        await browser.pause(2000);
        const itemTotalText = await performanceUserLocator.pgUseritemTotalPriceCheckout.getText();
        const itemTotalprice = await parseFloat(itemTotalText.replace('Item total: $', ''));
        await browser.pause(2000);
        return itemTotalprice;
    }
    async getItemTotalPriceWithTax() {
        await browser.pause(2000);
        const itemTotalTax = await performanceUserLocator.pgUseritemTotalPriceWithTax.getText();
        console.log(`Tax_Text ${itemTotalTax}`);
        const itemTotalwithTax = parseFloat(itemTotalTax.replace('Total: $', ''));
        console.log(`Tax_Amount ${itemTotalwithTax}`);
        await browser.pause(2000);
        return itemTotalwithTax;
    }

    async clickFinishLink() {
        await performanceUserLocator.pgUserFinishLink.click();
    }
    async getSuccessfulMessage() {
        return await performanceUserLocator.successfulMessage.getText();
    }

    async getSuccessfulMessageDetails() {
        return await performanceUserLocator.successfulmessageDetails.getText();
    }

    async clickOnLogoutButton() {
        await performanceUserLocator.pgUserLogoutLink.click();
    }

}
module.exports = new performanceUserActions();