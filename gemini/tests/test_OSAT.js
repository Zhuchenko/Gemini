gemini.suite('OSAT', (suite) => {
    suite.setUrl('wix/p6576546.aspx')
    .setCaptureElements(['#OSAT', '#why'])
    .before(function(actions, find) {
        this.firstOption = find('#OSAT_3');
    })
    .capture('plain')
    .capture('hovered', function(actions) {
        actions.mouseMove(this.firstOption);
    })
    .capture('clicked_1', function(actions) {
        actions.click(this.firstOption);
        actions.waitForElementToShow('#why_input');
    })
    .capture('with text', function(actions, find) {
        actions.sendKeys(find('#why_input'), 'for test');
    })
    .capture('clicked_2', function(actions, find) {
        actions.click(find('#OSAT_6'));
        actions.wait(1000);
    });
});