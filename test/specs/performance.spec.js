const performanceActions = require ("../pageobjects/performanceUser/performanceUserAction.js")

const pgUsername = "performance_glitch_user";
var password = "secret_sauce";
const count = 1;
var firstName = "Aritra";
var lastName = "Chowdhury";
var postalCode = "1210";
var TaxPercentage = 0.08;
var productArray = ['Test.allTheThings() T-Shirt (Red)'];

describe("Performance glitch User journey", () => {
    it("Performance glitch User sucessfully Login", async () => {
        await performanceActions.clickOnpgUserName(pgUsername);
        await performanceActions.clickOnpgUserPassword(password); //Password
        await browser.pause(2000);
        await performanceActions.clickOnpgUserLoginButton();
    }) 

    it("Performance Glitch User Menubar open close", async () => {
        await performanceActions.clickHambrgerOpenMenu();
        await performanceActions.clickOnResetAppState();
        await browser.pause(2000);
        await performanceActions.clickOnHamburgerCloseMenu();
        await browser.pause(2000);
        await browser.refresh();      
    })

    it("Performance Glitch User Add to cart Journey", async () => {
      
        await performanceActions.clicktoOpenNameFilter();
        await browser.pause(2000);
        await performanceActions.selectNamefromFilter();
        await performanceActions.clickAddtoCartFromList(count);
        await browser.pause(2000);
        await performanceActions.clickOnAddtoCartButton();
        await browser.pause(2000);
    })

    it("Performance Glitch User Checkout Info Journey", async () => {  //Checkout info
        await performanceActions.clickOnCheckout();
        await performanceActions.checkOutfirstname(firstName);
        await performanceActions.checkOutlastname(lastName);
        await performanceActions.checkOutpostalcode(postalCode);       
        await browser.pause(2000);
        await performanceActions.clickContinueLink();
    })

    it("Performance Glitch User Total Price and With Tax verify Journey", async () => {
        var name = await performanceActions.getProductNameFromInventory(count);
        expect(name).toEqual(productArray);
        var price = await performanceActions.getProductPriceFromInventory(count);
        let calculatedTotal = 0;
        for (let i = 0; i < price.length; i++) {
            calculatedTotal += price[i];
        }
        
        const itemPrice = await performanceActions.getItemTotalPrice();
        expect(calculatedTotal).toEqual(itemPrice);
        const expectedTotal = calculatedTotal + (calculatedTotal * TaxPercentage);
        const totalPricewithTax = await performanceActions.getItemTotalPriceWithTax();
        expect(expectedTotal).toBeCloseTo(totalPricewithTax);  
        await performanceActions.clickFinishLink();
        await browser.pause(2000);
    })

    it("Performance Glitch User Successful message Verify Journey", async () => {
        const initiaiSuccessfulMessage = "Thank you for your order!";
        const actualSuccessfulMessge = await performanceActions.getSuccessfulMessage();
        expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);

        const initialSuccessfulMesageDetails = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
        const actualSuccessfulMesageDetails = await performanceActions.getSuccessfulMessageDetails();
        expect(initialSuccessfulMesageDetails).toEqual(actualSuccessfulMesageDetails);
    })

    it("Performance Glitch User Menubar open,Close and Logout", async () => {
        await performanceActions.clickHambrgerOpenMenu();
        await performanceActions.clickOnResetAppState();
        await browser.pause(2000);
        await performanceActions.clickOnLogoutButton();   
    })
})