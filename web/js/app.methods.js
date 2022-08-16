/*global app _ kaleplay */
const setFavorites = (codes) => {
    codes.forEach(code => {
        const match = _.find(app.memdata.configs.favorite, (el) => {
            return el.shcode === code;
        });
        if (!match) {
            app.memdata.configs.favorite.push({
                shcode: code,
                mtime: +new Date()
            });
        }
    });
};
let methods = {
    decode_tsv: (str) => {
        let list = str.split('\n');
        let header = list.shift();
        let model = {};
        _.each(header.split('\t'), function (ss, idx) {
            model[idx] = ss;
        });
        let result = [];
        _.each(list, function (ss) {
            let row = ss.split('\t');
            let temp = {};
            _.each(row, function (val, idx) {
                let tt = model[idx];
                if (app.memdata.field.indexOf(tt) !== -1) {
                    temp[tt] = +val;
                } else {
                    temp[tt] = val;
                }
            });
            result.push(temp);
        });
        return result;
    },
    setRatioColor: (ratio) => {
        if (ratio === 0) return 'color-green';
        if (ratio < 0) return 'minus';
        if (ratio > 0) return 'plus';
        return '';
    },
    commas: (val, type) => {
        if (type === 'bil' || val > 99999999) {
            const num = Math.floor(val / 100000000);
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        if (9999999 > val && val > 999) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return parseFloat(val).toFixed(1);
    },
    checkFavorite: (cb) => {
        const favorite_key = app.memdata.config_keys.favorite;
        kaleplay.users.configs.get(favorite_key, (err, res) => {
            if (err) {
                console.error(err);
            }
            let codes = [];
            if (res && res.data) {
                codes = res.data.map(ele => ele.shcode);
                setFavorites(codes);
            }
            cb(codes);
        });
    },
    askLoginConfirm: () => {
        var res = window.confirm('로그인이 필요합니다. 로그인 하시겠습니까?');
        if (res === true) {
            window.location.href = app.memdata.urls.redirect_uri;
        }
    },
    fetchStockVal: (config) => {
        return fetch(app.urls.STOCKS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config)
        }).then(res => res.json()).catch(err => console.error(err));
    }
};

app.methods = methods;