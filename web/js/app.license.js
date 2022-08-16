/*global kaleplay Kaleplay _ $ app*/
(function () {
    'use strict';
    var license = function (callback) {
        kaleplay.users.me(function (err, res) {
            if (err) {
                console.log(err);
            } else {
                Kaleplay.traces.create({
                    product_id: app.memdata.product_id,
                    action: 'check-in'
                });
                if (res) {
                    _.assignIn(app.memdata.user, res);
                }
                var $title = $('title');
                var t_text = $title.text();
                $title.text(t_text + '::' + app.memdata.user.nickname + '님을 환영합니다.');
                app.memdata.is_logined = true;
                window.onbeforeunload = function () {
                    Kaleplay.traces.create({
                        product_id: app.memdata.product_id,
                        action: 'check-out'
                    });
                };
            }
            return callback();
        });
    };
    app.license = license;
}());