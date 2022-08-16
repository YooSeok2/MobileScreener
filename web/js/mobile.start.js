/*global app $ Sammy */
var sammy = Sammy(function () {
    this.get("/index.html", function () {
        $('#detail').hide();
        $('#home').show();
    });
    this.get("/index.html#/detail/:id", function () {
        app.targetCode = this.params['id'];
        app.startDetailView().then(() => {
            $('#home').hide();
            $('#detail').show();
        });
    });
});

$(function () {
    app.license(() => {
        sammy.run();
        app.startView();
    });
});