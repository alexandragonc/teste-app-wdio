class SetForm {
    
    get inputField(){ 
        return $('~text-input')
    }

    async setInputField(input){
        await this.inputField.setValue(input)
    }

    get switchField(){ 
        return $('~switch')
    }
    
    async clickSwitchField(){
        await this.switchField.click()
    }

    get dropdownClick(){ 
        return $('~Dropdown')
    }
    async clickDropdown(){
        await this.dropdownClick.click()
    }

    get dropdownMessage(){ 
        return $('~android:id/text1')
        
    }

    async clickDropdowMessage(){
        await this.dropdownMessage.$('webdriver.o is awesome').click()
    }

    get clickBottomActive(){ 
        return $('#button-Active')
    }

    async clickActive(){
        await this.clickBottomActive.click()
    }

    get clickBottomOk(){ 
        return $('~android:id/button1')
    }

    async clickOk(){
        await this.clickBottomOk.click()
    }

}
module.exports = new SetForm();
