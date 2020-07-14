const { remote } = require('webdriverio');
const path = require('path');
const sync = require('@wdio/sync').default

var options = {
    capabilities: {
        browserName: 'chrome'
    },
    waitforTimeout: 7000,
};

remote({
    runner: true,
    outputDir: __dirname,
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ["--incognito"],
        },
    }
}).then((browser) => sync(() => {
    global.bro = browser
    let regionNum = '101'
    let fio = "Иванов Иван Иванович"
    let phone = "84950000000"
    let email = "ivanov@ivan.ivanovich"
    let shortDescription = "Тест скороти заведения заявки"
    let detailedDescription = "Подробный текст: Тест скороти заведения заявки"
    let dateTicket = '10.07.2020 22:14:04'
    let filePath = 'windows-version.txt'

        browser.url('http://localhost:3036/')

        browser.pause(1000)
        browser.$('#qf_region').setValue(regionNum)
        browser.$('#qf_detailedDescription').setValue(detailedDescription)
        browser.$('#qf_fio').setValue(fio)
        browser.$('#qf_phone').setValue(phone)
        browser.$('#qf_dateTicket').setValue(dateTicket)
        browser.$('#qf_filePath').setValue(filePath)
        browser.$('#qf_email').setValue(email)
        browser.$('#qf_shortDescription').setValue(shortDescription)
}))