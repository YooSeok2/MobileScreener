/*global app */
(function () {
    app.filter.option = {
        marketcap_min: {
            start: 100000000000,
            unit: 100000000000,
            range: 10,
            id: '#marketcap-min',
            txt: '(억원)',
            type: 'bil'
        },
        marketcap_max: {
            start: 100000000000,
            unit: 100000000000,
            range: 50,
            id: '#marketcap-max',
            txt: '(억원)',
            type: 'bil'
        },
        per_min: {
            start: 0,
            unit: 0.5,
            range: 41,
            id: '#per-min'
        },
        per_max: {
            start: 0,
            unit: 0.5,
            range: 41,
            id: '#per-max'
        },
        dps_r_min: {
            start: 1,
            unit: 1,
            range: 10,
            id: '#dps_r-min'
        },
        dps_r_max: {
            start: 1,
            unit: 1,
            range: 10,
            id: '#dps_r-max'
        },
        price_min: {
            start: 10000,
            unit: 10000,
            range: 50,
            id: '#price-min',
            txt: '(원)'
        },
        price_max: {
            start: 10000,
            unit: 10000,
            range: 50,
            id: '#price-max',
            txt: '(원)'
        },
        ratio_min: {
            start: -29.5,
            unit: 0.5,
            range: 120,
            id: '#ratio-min',
            txt: '(%)'
        },
        ratio_max: {
            start: -29.5,
            unit: 0.5,
            range: 120,
            id: '#ratio-max',
            txt: '(%)'
        },
        pbr_min: {
            start: 0.5,
            unit: 0.5,
            range: 20,
            id: '#pbr-min'
        },
        pbr_max: {
            start: 0.5,
            unit: 0.5,
            range: 20,
            id: '#pbr-max'
        },
        roe_min: {
            start: -20,
            unit: 5,
            range: 15,
            id: '#roe-min'
        },
        roe_max: {
            start: -20,
            unit: 5,
            range: 15,
            id: '#roe-max'
        },
        chg_1w_min: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_1w-min'
        },
        chg_1w_max: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_1w-max'
        },
        chg_1m_min: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_1m-min'
        },
        chg_1m_max: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_1m-max'
        },
        chg_3m_min: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_3m-min'
        },
        chg_3m_max: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_3m-max'
        },
        chg_6m_min: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_6m-min'
        },
        chg_6m_max: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_6m-max'
        },
        chg_1y_min: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_1y-min'
        },
        chg_1y_max: {
            start: -20,
            unit: 10,
            range: 8,
            id: '#chg_1y-max'
        },
        diff_sma50_min: {
            start: -10,
            unit: 10,
            range: 8,
            id: '#diff_sma50-min'
        },
        diff_sma50_max: {
            start: -10,
            unit: 10,
            range: 8,
            id: '#diff_sma50-max'
        },
        diff_sma200_min: {
            start: -10,
            unit: 10,
            range: 8,
            id: '#diff_sma200-min'
        },
        diff_sma200_max: {
            start: -10,
            unit: 10,
            range: 8,
            id: '#diff_sma200-max'
        },
        cagr_2y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_2y-min'
        },
        cagr_2y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_2y-max'
        },
        cagr_3y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_3y-min'
        },
        cagr_3y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_3y-max'
        },
        cagr_5y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_5y-min'
        },
        cagr_5y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_5y-max'
        },
        cagr_10y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_10y-min'
        },
        cagr_10y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_10y-max'
        },
        cagr_15y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_15y-min'
        },
        cagr_15y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_15y-max'
        },
        cagr_20y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_20y-min'
        },
        cagr_20y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_20y-max'
        },
        cagr_30y_min: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_30y-min'
        },
        cagr_30y_max: {
            start: -40,
            unit: 10,
            range: 15,
            id: '#cagr_30y-max'
        },
        opm_min: {
            start: -30,
            unit: 10,
            range: 10,
            id: '#opm-min'
        },
        opm_max: {
            start: -30,
            unit: 10,
            range: 10,
            id: '#opm-max'
        },
        npm_min: {
            start: -30,
            unit: 10,
            range: 10,
            id: '#npm-min'
        },
        npm_max: {
            start: -30,
            unit: 10,
            range: 10,
            id: '#npm-max'
        },
        peg_min: {
            start: -1,
            unit: 0.5,
            range: 9,
            id: '#peg-min'
        },
        peg_max: {
            start: -1,
            unit: 0.5,
            range: 9,
            id: '#peg-max'
        },
        pcr_min: {
            start: 1,
            unit: 1,
            range: 9,
            id: '#pcr-min'
        },
        pcr_max: {
            start: 1,
            unit: 1,
            range: 9,
            id: '#pcr-max'
        },
        psr_min: {
            start: 1,
            unit: 1,
            range: 9,
            id: '#psr-min'
        },
        psr_max: {
            start: 1,
            unit: 1,
            range: 9,
            id: '#psr-max'
        },
        roa_min: {
            start: -10,
            unit: 10,
            range: 7,
            id: '#roa-min'
        },
        roa_max: {
            start: -10,
            unit: 10,
            range: 7,
            id: '#roa-max'
        },
        crr_min: {
            start: 0,
            unit: 50,
            range: 21,
            id: '#crr-min'
        },
        crr_max: {
            start: 0,
            unit: 50,
            range: 21,
            id: '#crr-max'
        },
        der_min: {
            start: -50,
            unit: 50,
            range: 8,
            id: '#der-min'
        },
        der_max: {
            start: -50,
            unit: 50,
            range: 8,
            id: '#der-max'
        },
        sales_growth_1y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_1y-min'
        },
        sales_growth_1y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_1y-max'
        },
        sales_growth_2y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_2y-min'
        },
        sales_growth_2y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_2y-max'
        },
        sales_growth_3y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_3y-min'
        },
        sales_growth_3y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_3y-max'
        },
        sales_growth_4y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_4y-min'
        },
        sales_growth_4y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_4y-max'
        },
        sales_growth_5y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_5y-min'
        },
        sales_growth_5y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#sales_growth_5y-max'
        },
        business_profit_growth_1y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_1y-min'
        },
        business_profit_growth_1y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_1y-max'
        },
        business_profit_growth_2y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_2y-min'
        },
        business_profit_growth_2y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_2y-max'
        },
        business_profit_growth_3y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_3y-min'
        },
        business_profit_growth_3y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_3y-max'
        },
        business_profit_growth_4y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_4ymin'
        },
        business_profit_growth_4y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_4ymax'
        },
        business_profit_growth_5y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_5y-min'
        },
        business_profit_growth_5y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#business_profit_growth_5y-max'
        },
        net_income_growth_1y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_1y-min'
        },
        net_income_growth_1y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_1y-max'
        },
        net_income_growth_2y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_2y-min'
        },
        net_income_growth_2y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_2y-max'
        },
        net_income_growth_3y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_3y-min'
        },
        net_income_growth_3y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_3y-max'
        },
        net_income_growth_4y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_4y-min'
        },
        net_income_growth_4y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_4y-max'
        },
        net_income_growth_5y_min: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_5y-min'
        },
        net_income_growth_5y_max: {
            start: 0,
            unit: 10,
            range: 31,
            id: '#net_income_growth_5y-max'
        },
        vprice_ratio_min: {
            start: 10,
            unit: 10,
            range: 10,
            id: '#vprice_ratio-min',
            txt: '(%)'
        },
        vprice_ratio_max: {
            start: 10,
            unit: 10,
            range: 10,
            id: '#vprice_ratio-max',
            txt: '(%)'
        },
        ncav_min: {
            start: -4.5,
            unit: 0.5,
            range: 30,
            id: '#ncav-min'
        },
        ncav_max: {
            start: -4.5,
            unit: 0.5,
            range: 30,
            id: '#ncav-max'
        },
        beta_min: {
            start: -9.5,
            unit: 0.5,
            range: 40,
            id: '#beta-min'
        },
        beta_max: {
            start: -9.5,
            unit: 0.5,
            range: 40,
            id: '#beta-max'
        }
    };
}());
