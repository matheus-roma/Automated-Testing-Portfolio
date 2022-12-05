const{Builder, By, Key, until} = require("selenium-webdriver");
const assert = require('assert'); //add this
const { elementIsEnabled } = require("selenium-webdriver/lib/until");


testPage = "https://forms.liferay.com/web/forms/shared/-/form/122548"

xPathBR = "/html/body/div[1]/div/div/div/ul/li/a/span[2]"
idBR = "_com_liferay_dynamic_data_mapping_form_web_portlet_DDMFormPortlet_kldx______menu__portugues_2d_brasil__1"
xPathFeedbackItems = [
"/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[1]/div/div/div/span[2]/div",
"/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[2]/div/div/div/span[2]/div",
"/html/body/div[1]/div[1]/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[2]/div/div/div/div/div/span[2]/div"]

feedbackEmptyField = "This field is required."

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
    
        assert.strictEqual(await feedbackItem1.getText(), feedbackEmptyField);
        assert.strictEqual(await feedbackItem2.getText(), feedbackEmptyField);
        assert.strictEqual(await feedbackItem3.getText(), feedbackEmptyField);
        console.log("PASS!")
    
    } finally {
        //Closing the browser
        await driver.quit();
    }
}

async function testTranslation(){
    let driver = new Builder().forBrowser("firefox").build();

    try{

        //Opening firefox browser
        await driver.get(testPage);

        //Changing the language
        languageButton = driver.wait(until.elementLocated(By.id("_com_liferay_dynamic_data_mapping_form_web_portlet_DDMFormPortlet_kldx___menu")));
        await driver.executeScript("arguments[0].click();", languageButton);
 
        let brazilButton = driver.wait(until.elementLocated(By.id(idBR)));
        
        //Skiping delay to change the language
        //await driver.sleep(1000)
        await driver.executeScript("arguments[0].click();", brazilButton);
        //await driver.sleep(1000)
        

        let formPageTitle = driver.wait(until.elementLocated(By.className("lfr-ddm-form-page-title")));
        let pageHeaderTitle = driver.wait(until.elementLocated(By.className("lfr-ddm__default-page-header-title")));
        let pageHeaderDescription = driver.wait(until.elementLocated(By.className("lfr-ddm__default-page-header-description")));
        let formPageDescription = driver.wait(until.elementLocated(By.className("lfr-ddm-form-page-description")));
        let textSecondary = driver.wait(until.elementLocated(By.className("text-secondary")));
        let firstQuestion = driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[1]/div/div/div/label")));
        let secondQuestion = driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[1]/div/div[2]/div/div/div/label")));
        let thirdQuestion = driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/div/div/div/div/div/div/form/div[4]/div[2]/div/div/div[1]/div/div/div[2]/div/div/div/div/div/label")));
        let submitText = driver.wait(until.elementLocated(By.id("ddm-form-submit")));


        //assert.strictEqual(await formPageTitle.getText(), "Está é a primeira página de nosso formulário.");
        //assert.strictEqual(await pageHeaderTitle.getText(), "Este é um formulário Liferay.");
        //assert.strictEqual(await pageHeaderDescription.getText(), "E aqui temos a descrição do nosso formulário.");
        //assert.strictEqual(await formPageDescription.getText(), "Vamos começar.");
        //assert.strictEqual(await textSecondary.getText(), "Indica os campos obrigatórios");
        assert.strictEqual(await firstQuestion.getText(), "Qual é o seu jogador de futebol favorito?");
        //assert.strictEqual(await secondQuestion.getText(), "Qual foi a data que a Liferay foi fundada?");
        assert.strictEqual(await thirdQuestion.getText(), "Por que você ingressou na área de testes?");
        assert.strictEqual(await submitText.getText(), "Submeter");
           

        console.log("PASS!")
    

    } catch(err){
        console.log("Input" + err)
    
    }finally {
        //Closing the browser
        await driver.quit();
    }

}
//testEmptyFields();
testTranslation();