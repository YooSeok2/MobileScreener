/*global $ app _ */
const getGridFieldForm = (id) => {
    const defaultForm = ['hname', 'marketcap', 'price', 'ratio'];
    let forms = _.uniq([...defaultForm, ...id]);
    forms.push('code');
    return forms.map((ele) => app.grid.fieldOpt[ele]);
};
const createStockList = () => {
    getFetchStocks().then(res => {
        app.grid.agGrid(res.data, res.forms);
    });
};

const isActiveFilterResetBtn = (condition) => {
    const $filterReset = $('.tab-cont-bottom button');
    if (condition) {
        $filterReset.attr('disabled', false);
    } else {
        $filterReset.attr('disabled', true);
    }
};

const onClickFilterReset = () => {
    const resetBtn = $('.filter-reset');
    const allSelect = $('select');
    resetBtn.click(() => {
        allSelect.find('option:first').prop("selected", true);
        allSelect.removeClass('active-select');
        isActiveFilterResetBtn(false);
        localStorage.removeItem('kalescreener_mobile_filter');
        updateStockList();
    });
};

const getFetchStocks = () => {
    let config = { ...app.config };
    const saveFilter = localStorage.getItem('kalescreener_mobile_filter');
    if (saveFilter) {
        config.filter = saveFilter;
    }
    if ('sort' in config) {
        config.sort = JSON.stringify(app.config.sort);
    }

    return app.methods.fetchStockVal(config).then(res => {
        const filters = JSON.parse(localStorage.getItem('kalescreener_mobile_filter'));
        const filterIds = _.keys(filters);
        const forms = getGridFieldForm(filterIds);
        return {
            data: app.methods.decode_tsv(res.items),
            forms: forms
        };});
};

const setFilterConfig = (opt, prev) => {
    const prevFilter = prev;
    const id = opt.id.split('-');
    const key = id[0];
    const ref = id[1];
    const val = opt.val;
    let minVal = 'no_min';
    let maxVal = 'no_max';
    let filter = Object.keys(prevFilter);
    filter = filter.filter(ele => ele === key);
    if (filter.length > 0) {
        const preVal = prevFilter[key];
        minVal = preVal[0];
        maxVal = preVal[1];
    }
    if (ref === 'min') {
        minVal = val;
    } else {
        maxVal = val;
    }
    const newFilter = {
        ...prevFilter,
        [key]: [minVal, maxVal]
    };
    isActiveFilterResetBtn(true);
    localStorage.setItem('kalescreener_mobile_filter', JSON.stringify(newFilter));
};

const updateStockList = (opt) => {
    if (opt) {
        if (opt.filter) {
            const prevFilter = JSON.parse(localStorage.getItem('kalescreener_mobile_filter')) || {};
            setFilterConfig(opt.filter, prevFilter);
        }
        if (opt.sort) {
            app.config.sort = opt.sort;
        }
        if (opt.keyword_filter) {
            app.config.keyword_filter = opt.keyword_filter;
        }
        if (opt.shcode_filter) {
            app.config.shcode_filter = opt.shcode_filter;
        }
    }
    getFetchStocks().then(res => {
        app.grid.update(res.data, res.forms);
    });
};


const createFavoriteList = () => {
    app.methods.checkFavorite((codes) => {
        let shcodeFilter = '';
        codes.forEach(code => {
            shcodeFilter += code + ",";
        });
        updateStockList({ shcode_filter: shcodeFilter });
    });
};

const deleteFavoriteList = () => {
    delete app.config.shcode_filter;
    updateStockList();
};

const onClickOnlyFavoriteBtn = () => {
    const $onlyFavorite = $('.only-favorite');
    const $star = $('.only-favorite > i');
    $onlyFavorite.click(() => {
        if (app.memdata.is_logined === false) {
            app.methods.askLoginConfirm();
            return false;
        }
        if ($star.hasClass('color-g')) {
            $star.removeClass('color-g');
            $star.addClass('color-y');
            createFavoriteList();
        } else {
            $star.removeClass('color-y');
            $star.addClass('color-g');
            deleteFavoriteList();
        }
    });
};

const changeFilterListener = () => {
    const allSelect = $('.tab_cont select');
    allSelect.on("change", (event) => {
        const target = event.target;
        if (target) {
            const targetId = target.id;
            const $target = $(`#${targetId}`);
            const targetVal = $target.val();
            $target.addClass('active-select');
            updateStockList({ filter: { id: targetId, val: targetVal } });
        }
    });
};

const drawFilterOpt = (opt, filter) => {
    const target = $(opt.id);
    let view = '';
    let val = opt.start;
    const type = opt.type || '';
    let isSelect = false;
    for (let loop = 0; loop < opt.range; loop += 1) {
        _.each(filter, (ele) => {
            if (ele.id === opt.id && parseInt(ele.val) === val) {
                isSelect = true;
            }
        });
        if (isSelect) {
            const $tabTitle = $('.tab_title');
            const parentId = target.parents('.tab-cont-body')[0].id;
            $tabTitle.find(`.${parentId}`).addClass('on');
            target.addClass('active-select');
            view += `<option value=${val} class='num-type' selected>
                        ${app.methods.commas(val, type)}${opt.txt || ''}
                    </option>`;
        } else {
            view += `<option value=${val} class='num-type'>${app.methods.commas(val, type)}${opt.txt || ''}</option>`;
        }
        isSelect = false;
        val += opt.unit;
    }
    target.append(view);
};

const setDetailConfig = (filters) => {
    let filterConfig = [];
    _.forIn(filters, (val, key) => {
        _.each(val, (ele, idx) => {
            if (idx === 0) {
                filterConfig.push({ id: `#${key}-min`, val: ele });
            } else {
                filterConfig.push({ id: `#${key}-max`, val: ele });
            }
        });
    });
    return filterConfig;
};

const getParseFilter = () => {
    const saveFilter = JSON.parse(localStorage.getItem('kalescreener_mobile_filter'));
    let filter = [];
    if (saveFilter) {
        isActiveFilterResetBtn(true);
        filter = [...setDetailConfig(saveFilter)];
    } else {
        isActiveFilterResetBtn(false);
    }
    return filter;
};

const createFilterOpt = () => {
    const options = app.filter.option;
    const filterConfig = getParseFilter();
    Object.keys(options).forEach(ele => {
        drawFilterOpt(options[ele], filterConfig);
    });
};

const changeSearchListener = () => {
    const searchBox = $('#searchBox');
    // keyup paste
    searchBox.bind('change', () => {
        const searchVal = searchBox.val();
        if (searchVal) {
            updateStockList({ keyword_filter: searchVal });
        } else {
            delete app.config.keyword_filter;
            updateStockList();
        }
    });
};

const resetSearchListener = () => {
    const close_button = $('.close_button');
    close_button.click(() => {
        $('#searchBox').val('');
        delete app.config.keyword_filter;
        updateStockList();
    });
};

const onClickHideBtn = () => {
    const hideBtn = $('.hide-button');
    const $list = $('.list');
    const cssOpt = {
        "top": "100px",
        "height": "calc(100vh - 105px)"
    };
    hideBtn.click(() => {
        $(".tab_cont").hide();
        $list.css(cssOpt);
    });
};

const onClickTabListener = () => {
    const tabTitle = $(".tab_title li");
    const tabElement = $(".tab_cont > div");
    const cssOpt = {
        "top": "436px",
        "height": "calc(100vh - 441px)"
    };
    tabTitle.click(function () {
        const idx = $(this).index();
        const $list = $('.list');
        $list.css(cssOpt);
        tabTitle.removeClass("on");
        tabTitle.eq(idx).addClass("on");
        $(".tab_cont").show();
        tabElement.hide();
        tabElement.eq(idx).show();
    });
    onClickHideBtn();
};

app.startView = () => {
    createFilterOpt();
    createStockList();
    onClickFilterReset();
    onClickTabListener();
    onClickOnlyFavoriteBtn();
    resetSearchListener();
    changeSearchListener();
    changeFilterListener();
};