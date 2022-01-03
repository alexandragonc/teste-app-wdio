const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js' 
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "Nox9",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/NativeDemoApp-0.4.0.apk'),
        "appWaitActivity": "com.wdiodemoapp.MainActivity"
    }]
}