/*global app */
(function () {
    const basic = app.grid.field_maker.basic;

    const fieldSet = (form, cb) => {
        app.methods.checkFavorite((codes) => {
            const field_set = form.map((ele) => basic(ele));
            app.codes = codes;
            cb(field_set);
        });
    };
    app.methods.fieldSet = fieldSet;
}());