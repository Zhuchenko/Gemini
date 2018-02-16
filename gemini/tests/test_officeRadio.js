gemini.suite('officeRadio', (suite) => {
    suite.setUrl('wix/p6587491.aspx')
    .setCaptureElements('#officeRadio')
    .capture('plain')
    .capture('window_size_changed', function(actions) {
        actions.setWindowSize(500, 662);
    });
});