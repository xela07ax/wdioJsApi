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
    let regionNum = '101'
    let fio = "Иванов Иван Иванович"
    let phone = "84950000000"
    let email = "ivanov@ivan.ivanovich"
    let shortDescription = "Тест скороти заведения заявки"
    let detailedDescription = "Подробный текст: Тест скороти заведения заявки"
    let dateTicket = '10.07.2020 22:14:04'
    let filePath = 'windows-version.txt'

    browser.url('http://localhost:3456')
    console.log(browser.getTitle())
    browser.$('#username').setValue('user123')
    browser.$('#password').setValue('pa$$word')
    browser.$('#loginbutton').click()
    console.log('Входим')

    function newTicket() {
        const elemN = browser.$('=Новая заявка')
        elemN.waitForDisplayed({ timeout: 15000, timeoutMsg: 'timeoutMsg: Инициатор', interval: 200 })
        browser.pause(3000)
        elemN.click()
        console.log('Новая заявка - нажата')
    }
    newTicket()

    function initiator() {
        const elem = browser.$('label*=Инициатор:')
        elem.waitForDisplayed({ timeout: 25000, timeoutMsg: 'timeoutMsg: Инициатор не найден', interval: 200 })
        browser.pause(3000)
        elem.click()
        console.log('Инициатор - нажат')
    }
         try {
        initiator()
   }
   catch (error) {
        newTicket()
       initiator()
   }
    browser.$('span*=Пользователь').click()
    browser.pause(1000)
    browser.$('label*=Инициатор:').click()
    browser.$('a#menu0_blank__OPTION_a').click()
    console.log('Выбрали пустого инициатора')

    function attach() {
        browser.$('button=Приложить файл').click()
        console.log('Приложить файл')
    }
    function attach_upload() {
        const uiFrame = browser.$('iframe#upload_iframe')
        uiFrame.waitForDisplayed({ timeout: 5000, timeoutMsg: 'timeoutMsg: Приложить файл', interval: 200 })
        console.log('Приложить файл открыт')
    }
    function attach_upload_run() {
        try {
            attach_upload()
        }
        catch (error) {
            console.log('Приложить файл не открыт')
            attach()
            attach_upload_run()
        }
    }
    if (filePath !== ''){
        attach()
        attach_upload_run()
        browser.switchToFrame(browser.$('iframe#upload_iframe'))
        browser.pause(1000)
        browser.$('#file').setValue(path.join(__dirname, 'resources', filePath))
        browser.pause(1000)
        browser.switchToParentFrame()
        browser.pause(1000)
        browser.$('button=OK').click()
        browser.pause(3000)
    }

    const elem2 = browser.$('label*=Регион инициатора:').$('..').$('..').$('..').$('..').$('img.dButton')
    elem2.waitForDisplayed({ timeout: 15000, timeoutMsg: 'Rrrr', interval: 200 })
    browser.pause(3000)
    elem2.click()
    console.log('Пока все')

    browser.$('input#lookup_page1_tfrow_\\[C\\:0\\]_txt-tb').setValue(`${regionNum}\n`)
    browser.pause(3000)
    const regions = browser.$$('table#lookup_page1_tbod-tbd tbody tr')
    if ((regions.length < 3) || (regions.length > 4)){
        console.log('Ошибка при чтении выборки со страницы')
        process.exit(1);
    } else if (regions.length === 3){
        console.log(`Ошибка, выборка ${regionNum} не нашла ничего`)
        process.exit(1);
    } else {
        console.log(`Выборка ${regionNum} найдена`)
        regions[3].$$('td')[1].$('span').click()
        browser.pause(1000)
    }
    browser.$('label=Классификация:').setValue('88.')
    browser.pause(1000)
    browser.$('label=ФИО:').setValue(fio)
    browser.pause(1000)
    browser.$('label=Телефон:').setValue(phone)
    browser.pause(1000)
    browser.$('label=Электронная почта:').setValue(email)
    browser.pause(1000)
    browser.$('label=Краткое описание:').setValue(shortDescription)
    browser.pause(1000)
    browser.$('label=Подробности:').setValue(detailedDescription)
    browser.pause(1000)
    browser.$('label=Дата поступления:').setValue(dateTicket)
    browser.pause(11000)
    browser.deleteSession()
}))