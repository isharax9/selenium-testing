const { Builder } = require('selenium-webdriver');

async function openBrowser() {
    // Initialize the Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to saucedemo.com
        await driver.get('https://www.saucedemo.com');
        
        // Maximize the browser window
        await driver.manage().window().maximize();

        // Enter username
        await driver.findElement({ css: '#login_button_container > div > form > div:nth-child(1) input' }).sendKeys('standard_user');

        // Enter password
        await driver.findElement({ xpath: '//*[@id="password"]' }).sendKeys('secret_sauce');

        // Add a delay after entering credentials and before hitting the login button
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Click the login button
        await driver.findElement({ css: '#login-button' }).click();

    } finally {
        // Close the browser after a delay
        //setTimeout(() => driver.quit(), 5000);
    }
}
openBrowser();