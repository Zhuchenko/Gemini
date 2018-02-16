gemini.suite('age', (suite) => {
    suite.setUrl('wix/p6576546.aspx')
    .setCaptureElements('#age')
    .capture('plain')
    .capture('selected', function(actions) {
        actions.executeJS(function(window){
            window.Confirmit.page.questions[1].setValue(3);
        });
    });
});