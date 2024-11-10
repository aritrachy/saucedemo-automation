const actions = require ("../pageobjects/lockoutUser/userAction.js")

const louname = "locked_out_user";
const password = "secret_sauce";

describe("Locked Out User journey", () => {
    it("should locked out user verify error message", async () => {
        // await browser.url('https://www.saucedemo.com/');
        await actions.login(louname, password);

     const errorMsg = await actions.getErrorMessage();
    const actualMsg = "Epic sadface: Sorry, this user has been locked out.";
    expect(errorMsg).toEqual(actualMsg);
    await browser.refresh();
})
})


