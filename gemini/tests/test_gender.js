gemini.suite('gender', (suite) => {
    suite.setUrl('wix/p6576546.aspx')
    .setCaptureElements('#gender')
    .before(function(actions, find) {
        this.firstOption = find('#gender_1_text');
        this.secondOption = find('#gender_1_text');
    })
    .capture('plain')
    .capture('hovered', function(actions) {
        actions.mouseMove(this.firstOption);
    })
    .capture('clicked_1', function(actions) {
        actions.click(this.firstOption);
    })
    .capture('clicked_2', function(actions) {
        actions.click(this.secondOption);
    });
});

