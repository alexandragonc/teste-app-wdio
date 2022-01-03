class FormPage {
    get enterFormPage(){ 
        return $('~Forms')
    }

    async goToForm(){
        await this.enterFormPage.click()
    }
}   

module.exports = new FormPage()