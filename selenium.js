const { Builder } = require('selenium-webdriver');

async function openBrowser() {
    // Initialize the Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to google.com
        await driver.get('https://www.google.com');
    } finally {
        // Close the browser after a delay
        setTimeout(() => driver.quit(), 5000);
    }
}
openBrowser();