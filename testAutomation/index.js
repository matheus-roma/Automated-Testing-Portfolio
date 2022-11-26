const{Builder, By, Key, until} = require("selenium-webdriver");
async function testBase(){
    let driver = new Builder().forBrowser("firefox").build();
    driver.get("https://forms.liferay.com/web/forms/shared/-/form/122548");
    driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[1]/div/div/div/input[1]")), 10000).sendKeys("Teste", Key.RETURN);


}
testBase();