gemini.suite('officesVisited', (suite) => {
    suite.setUrl('wix/p6576546.aspx')
    .setCaptureElements('#officesVisited')
    .before(function(actions, find) {
        this.firstOption = find('#officesVisited_6_text');
        this.secondOption = find('#officesVisited_1');
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
    })
    .capture('unclicked_2', function(actions) {
        actions.click(this.secondOption);
    })
    .capture('clicked_3', function(actions, find) {
        actions.click(find('#officesVisited_4'));
    })
    .capture('clicked_4', function(actions, find) {
        actions.click(find('#officesVisited_9'));
    })
    .capture('clicked_5', function(actions, find) {
        actions.click(find('#officesVisited_9'));
    })
    .capture('none', function(actions, find) {
        actions.click(find('#officesVisited_99'));
    })
    .capture('send_key', function(actions, find) {
        actions.sendKeys(find('#officesVisited_98_other'), "hi, gemini!");
    });
});
