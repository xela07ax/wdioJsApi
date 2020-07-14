var webdriverio = require('webdriverio');

var options = {
    capabilities: {
        browserName: 'chrome'
    }
};


(async () => {
    const browser = await webdriverio.remote(options);
    await browser.url('http://localhost:3036/')
    console.log(await browser.getTitle()) // outputs: Title
    let regionNum = '101'
    let fio = "Иванов Иван Иванович"
    let phone = "84950000000"
    let email = "ivanov@ivan.ivanovich"
    let shortDescription = "Тест скороти заведения заявки"
    let detailedDescription = "Подробный текст: Тест скороти заведения заявки"
    let dateTicket = '10.07.2020 22:14:04'
    let filePath = 'windows-version.txt'

    await browser.pause(1000)
    const inputElem = await browser.$('#qf_region')
    await inputElem.setValue(regionNum)
    await browser.$('#qf_detailedDescription').setValue(detailedDescription)
    await browser.$('#qf_fio').setValue(fio)
    await browser.$('#qf_phone').setValue(phone)
    await browser.$('#qf_dateTicket').setValue(dateTicket)
    await browser.$('#qf_filePath').setValue(filePath)
    await browser.$('#qf_email').setValue(email)
    await browser.$('#qf_shortDescription').setValue(shortDescription)
    await browser.pause(11000)
    await browser.deleteSession()
})().catch((e) => console.error(e))