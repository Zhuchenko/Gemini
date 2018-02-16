module.exports = {
    rootUrl: 'https://survey.testlab.firmglobal.net',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    compositeImage: true,
    tolerance: 10,

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }//,
        // ie: {
        //     desiredCapabilities: {
        //         browserName: 'InternetExplorer'
        //     }
        // }
    }
};