/*global */
(function () {
    'use strict';
    let app = {};
    app.filter = {
        option: {}
    };
    let redirect_uri = 'https://kaleplay.com/login.html?';
    redirect_uri += 'redirect_uri=https://app.kaleplay.com/com.kalecode.kalescreener_mobile/index.html';
    app.urls = {
        STOCKS_URL: 'https://op.kalecode.com:8750/api/kfilter/search',
        CHART_URL: 'https://op.kalecode.com:8750/api/v1/chart/stock/korea'
    };
    app.route = '/com.kalecode.kalescreener_mobile';
    app.config = {
        page: 1,
        start: 0,
        limit: 300
    };
    app.memdata = {
        field: [],
        config_keys: {
            favorite: 'com.kalecode.kalescreener:favorite'
        },
        configs: {
            favorite: []
        },
        product_id: 'com.kalecode.kalescreener_mobile',
        is_logined: false,
        user: {},
        urls: {
            redirect_uri: redirect_uri
        }
    };
    app.ratio = {
        field: ['ratio', 'vprice_ratio', 'chg_1m', 'chg_3m', 'chg_6m', 'chg_1y', 'diff_sma50', 'diff_sma200',
            'cagr_2y', 'cagr_5y', 'cagr_10y', 'cagr_15y', 'cagr_20y', 'cagr_30y', 'opm', 'npm', 'sales_growth_1y',
            'sales_growth_2y', 'sales_growth_3y', 'sales_growth_4y', 'sales_growth_5y', 'business_profit_growth_1y',
            'business_profit_growth_2y', 'business_profit_growth_3y', 'business_profit_growth_4y',
            'net_income_growth_1y', 'net_income_growth_2y', 'net_income_growth_3y', 'net_income_growth_4y',
            'net_income_growth_5y', 'ncav']
    };
    app.grid = {};
    app.targetCode = '';
    app.startView = function () {};
    app.startDetailView = function () {};
    window.app = app;
}());