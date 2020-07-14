var webdriverio = require('webdriverio');

var options = {
    hostname: '172.31.50.74',
    port: 4444,
    //hostname: '172.31.11.240',
    //port: 5555,
    path: '/wd/hub',
    capabilities: {
        browserName: 'chrome',
        browserVersion: '81.0',
        'goog:chromeOptions': {},
        'selenoid:options': {
            'enableVNC': true,
            'enableVideo': false,
            'screenResolution': '1920x1080'
        },

    },
    sessionTimeout: "60m",
    waitforTimeout: 1000000,
    onnectionRetryTimeout: 120000,
};


(async () => {
    const browser = await webdriverio.remote(options);
    await browser.url('http://localhost:8889/sufdclient/index.zul')
    await browser.url('https://duckduckgo.com')
    await browser.url('https://sakuli.io/')
    await browser.url('https://google.com/')
    const inputElem = await browser.$('#search_form_input_homepage')
    await inputElem.setValue('WebdriverIO')

    const submitBtn = await browser.$('#search_button_homepage')
    await submitBtn.click()

    console.log(await browser.getTitle()) // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

    await browser.deleteSession()
})().catch((e) => console.error(e))