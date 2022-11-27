const{Builder, By, Key, until} = require("selenium-webdriver");
const assert = require('assert'); //add this


testPage = "https://forms.liferay.com/web/forms/shared/-/form/122548"

xPathFeedbackItems = [
"/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[1]/div/div/div/span[2]/div",
"/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[2]/div/div/div/span[2]/div",
"/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[2]/div/div/div/div/div/span[2]/div"]

//Test submition with all fields empty
async function testEmptyFields(){
    let driver = new Builder().forBrowser("firefox").build();

    try{

        //Opening firefox browser
        await driver.get(testPage);

        //Submiting without fill any field
        submitButton = driver.wait(until.elementLocated(By.id("ddm-form-submit")));
        await driver.executeScript("arguments[0].click();", submitButton);

        //Checking reports
        let feedbackItem1 = driver.wait(until.elementLocated(By.xpath(xPathFeedbackItems[0])));
        let feedbackItem2 = driver.wait(until.elementLocated(By.xpath(xPathFeedbackItems[1])));
        let feedbackItem3 = driver.wait(until.elementLocated(By.xpath(xPathFeedbackItems[2])));
    
        assert.strictEqual(await feedbackItem1.getText(), "This field is required.");
        assert.strictEqual(await feedbackItem2.getText(), "This field is required.");
        assert.strictEqual(await feedbackItem3.getText(), "This field is required.");
        console.log("PASS!")
    
    } finally {
        //Closing the browser
        await driver.quit();
    }
}
testEmptyFields();