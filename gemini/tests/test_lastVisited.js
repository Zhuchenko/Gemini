gemini.suite('lastVisited', (suite) => {
    suite.setUrl('wix/p6576546.aspx')
    .setCaptureElements('#lastVisited')
    .capture('plain')
    .capture('hovered', function(actions, find) {
        actions.mouseMove(find('#lastVisited_input'));
    })
    .capture('selected', function(actions) {
        actions.executeJS(function (window) {
            window.Confirmit.page.questions[3].setValue("2017-01-01");
        });
    });
});