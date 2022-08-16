/*global $ app moment echarts*/
const getStockCode = () => {
    return app.targetCode.toString();
};

const getFetchStock = () => {
    const shcode = getStockCode();
    const config = {
        ...app.config,
        shcode_filter: shcode
    };
    return app.methods.fetchStockVal(config).then(res => app.methods.decode_tsv(res.items));
};

const setHtmlHeader = (stock) => {
    const $stockName = $('.stock-name');
    const $stockCode = $('.stock-code');

    $stockName.text(stock.hname);
    $stockCode.text(stock.code);
};

const getChartData = (code) => {
    const before = moment().subtract(6, 'month').format('YYYYMMDD');
    const stockCode = code;
    return fetch(`${app.urls.CHART_URL}/${stockCode}/price?interval=1d&from=${before}`)
        .then(res => res.json()).catch(err => console.error(err));

};

const getXAxisOpt = (time) => {
    const axisOpt = {
        type: 'category',
        data: time,
        scale: true,
        axisTick: {
            show: false,
            length: 0
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'dotted',
                color: '#777'
            }
        },
        axisLabel: {
            show: true,
            fontSize: 10,
            padding: [0, 0, 0, 50]
        },
        axisPointer: {
            snap: true
        },
        boundaryGap: true
    };
    return axisOpt;
};

const getYAxisOpt = () => {
    return {
        type: 'value',
        scale: true,
        position: 'right',
        boundaryGap: false,
        axisTick: {
            show: false,
            length: 0
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#777'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#eee'
            }
        },
        axisLabel: {
            show: true,
            fontSize: 10,
            interval: 1,
            margin: 5
        },
        axisPointer: {
            snap: true
        }
    };
};

const settingOption = (stock) => ({
    xAxis: getXAxisOpt(stock.time),
    backgroundColor: 'rgba(0,0,0,0)',
    grid: [{
        left: 25,
        right: 50,
        top: 25,
        bottom: 20
    }],
    yAxis: getYAxisOpt(),
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        data: stock.value,
        type: 'line',
        color: '#21A371',
        lineStyle: {
            width: 2
        },
        animation: false,
        showSymbol: false,
        smooth: false
    }]
});

const drawChart = (stock) => {
    getChartData(stock.code).then(res => {
        const newTimes = res.time.map(ele => {
            return moment(ele).format('YYYY.MM.DD');
        });
        const newChart = { ...res, time: newTimes };
        const myChart = echarts.init(document.getElementById('chart'));
        const option = settingOption(newChart);
        myChart.setOption(option);

        myChart.resize({
            width: window.innerWidth + 10
        });
    });
};

const getParseStock = (stock) => {
    const newObj = {
        ...stock,
        marketcap: app.methods.commas(Number(stock.marketcap), 'bil'),
        vprice: app.methods.commas(Number(stock.vprice)),
        eps: app.methods.commas(Number(stock.eps)),
        sales_1y: app.methods.commas(Number(stock.sales_1y)),
        sales_2y: app.methods.commas(Number(stock.sales_2y)),
        sales_3y: app.methods.commas(Number(stock.sales_3y)),
        sales_4y: app.methods.commas(Number(stock.sales_4y)),
        sales_5y: app.methods.commas(Number(stock.sales_5y)),
        business_profit_1y: app.methods.commas(Number(stock.business_profit_1y)),
        business_profit_2y: app.methods.commas(Number(stock.business_profit_2y)),
        business_profit_3y: app.methods.commas(Number(stock.business_profit_3y)),
        business_profit_4y: app.methods.commas(Number(stock.business_profit_4y)),
        net_income_1y: app.methods.commas(Number(stock.net_income_1y)),
        net_income_2y: app.methods.commas(Number(stock.net_income_2y)),
        net_income_3y: app.methods.commas(Number(stock.net_income_3y)),
        net_income_4y: app.methods.commas(Number(stock.net_income_4y)),
        net_income_5y: app.methods.commas(Number(stock.net_income_5y)),
        beta: app.methods.commas(Number(stock.beta))
    };
    return newObj;
};

const setHtmlContentBox = (stock) => {
    const contWrap = $('.cont-wrap');
    const parseStock = getParseStock(stock);
    const stockKeys = Object.keys(parseStock);
    const ratioFields = app.ratio.field;
    for (let lop = 0; lop < stockKeys.length; lop += 1) {
        for (let inLop = 0; inLop < ratioFields.length; inLop += 1) {
            if (stockKeys[lop] === ratioFields[inLop]) {
                const ratio = Number(parseStock[stockKeys[lop]]);
                const ratioColor = app.methods.setRatioColor(ratio);
                contWrap.find(`.${stockKeys[lop]}`).removeClass("plus minus color-green");
                contWrap.find(`.${stockKeys[lop]}`).addClass(ratioColor);
            }
        }
        contWrap.find(`.${stockKeys[lop]}`).text(`${parseStock[stockKeys[lop]]}`);
    }
};

app.startDetailView = () => {
    return getFetchStock().then(res => {
        const stock = res[0];
        setHtmlHeader(stock);
        drawChart(stock);
        setHtmlContentBox(stock);
    });
};
