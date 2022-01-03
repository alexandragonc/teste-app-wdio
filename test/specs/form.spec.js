const formPage = require("../pages/form.page");
const setForm = require("../pages/setform.page");

describe('Should do the form', () => {
    /**it('Should enter the form', async () => {
        await formPage.goToForm()
    });*/
    
    it('Should insert the form', async () => {
        await formPage.goToForm()
        await setForm.setInputField('Hi')
        await setForm.clickSwitchField()
        await setForm.clickDropdown()
        await setForm.clickDropdowMessage()
        await setForm.clickActive()
        await setForm.clickOk()

    });
});