const{Builder, By, Key, util} = require("selenium-webdriver");
async function testBase(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://forms.liferay.com/web/forms/shared/-/form/122548");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}
testBase();