browser.url('http://')



$('=Новая заявка').click()
$('label*=Инициатор:').click()

$('span*=Пользователь ЕГИССО').click()
$('label*=Инициатор в ЕГИССО:').click()
$('a#menu0_blank__OPTION_a').click()
console.log('Выбрали пустого инициатора')

let fio = "Иванов Иван Иванович"
let phone = "84950000000"
let email = "ivanov@ivan.ivanovich"
let shortDescription = "Тест скороти заведения заявки"
let detailedDescription = "Подробный текст: Тест скороти"
$('label=ФИО:').setValue("Иванов Иван Иванович")
$('label=Телефон:').setValue(phone)
$('label=Электронная почта:').setValue(email)
$('label=Краткое описание:').setValue(shortDescription)
$('label=Подробности:').setValue(detailedDescription)
$('label=Классификация:').setValue('88.')
$('label=Дата поступления обращения на почтовый ящик:').setValue('10.07.2020 22:14:04')

Электронная почта:
$('button=Приложить файл').click()

$('button=OK').click()
$('tbody').getText()
browser.switchToFrame($('iframe#upload_iframe'))

$('#file').setValue('c:\\windows-version.txt');
const path = require('path');
const filePath = path.join(__dirname, 'path/to/your/file');

const remoteFilePath = browser.uploadFile('c:\\windows-version.txt');
$('label=Имя:').click()
$('#file').setValue(remoteFilePath);
$('input#file').click()
$('iframe#upload_iframe').click()
$('iframe#upload_iframe').setValue('c:\\windows-version.txt')
$('iframe#upload_iframe').getText()
browser.switchtoframe($('iframe#upload_iframe'))
$('iframe#upload_iframe')
$('label*=Регион инициатора:').$('..').$('..').$('..').$('..').$('img.dButton').click()

browser.switchToFrame($('iframe#upload_iframe'))

const remoteFilePath = browser.uploadFile('c:\\windows-version.txt');
browser.$('#file').setValue(browser.uploadFile('c:\\windows-version.txt'))
browser.frame('#upload_iframe')
browser.switchtoframe('iframe#upload_iframe')
var my_frame = $('iframe[name="my_iframe"]').value;
browser.frame($('iframe#upload_iframe').value)
$('input#lookup_page1_tfrow_\\[C\\:0\\]_txt-tb').setValue('102\n')
$$('table#lookup_page1_tbod-tbd tbody tr').c
$$('table#lookup_page1_tbod-tbd tbody tr')[3].$$('td')[1].$('span').click()
//Должно прийти 3 элемента


$$('table#lookup_page1_tbod-tbd').getSize({  })
$('label*=Регион инициатора:').click()

$('label*=Выбрать значение').click()@beeline.ru;
browser.keys('\uE007')

$('//input/div[6]').click()
$('table#lookup_page1_tbod-tbd').$('[id="lookup_page1_tfrow_[C:0]_txt-img"]').click()
lookup_page1_tbod-tbd
$('#lookup_page1_tfrow_\[C\:\0\]_txt-tb').click()


    .setValue('124')
lookup_page1_tfrow_[C:0]_txt-tb
id="mdcb35a0b-img"
    .$('..').$('input').getText()


qf_region
browser.$('#qf_region').setValue('101')