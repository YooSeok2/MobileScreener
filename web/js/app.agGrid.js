/*global agGrid _ app fastLoop $ kaleplay*/
(function () {
    const favoriteToggle = (params) => {
        if (app.memdata.is_logined === false) {
            app.methods.askLoginConfirm();
            return false;
        }
        const targetId = params.value;
        const $this = $(`#${targetId}`);
        const match = _.find(app.memdata.configs.favorite, (el) => {
            return el.shcode === targetId;
        });
        if (match) {
            fastLoop.removeItem({
                list: app.memdata.configs.favorite,
                key: 'shcode',
                type: '===',
                val: targetId
            });
            $this.addClass('color-g');
            $this.removeClass('color-y');
        } else {
            app.memdata.configs.favorite.push({
                shcode: targetId,
                mtime: +new Date()
            });
            $this.removeClass('color-g');
            $this.addClass('color-y');
        }
        const favorite_key = app.memdata.config_keys.favorite;
        kaleplay.users.configs.set(favorite_key, {
            data: app.memdata.configs.favorite
        }, (err, res) => {
            console.log(err, res);
        });
    };

    const clickEvent = (params) => {
        const colid = params.column.colId;
        const codeVal = params.data.code;
        if (/code/g.test(colid)) {
            favoriteToggle(params);
        } else {
            location.href = `${app.route}/index.html#/detail/${codeVal}`;
            // location.href = `/index.html#/detail/${codeVal}`;
        }
    };

    const setGridOptions = (fields) => {
        return {
            columnDefs: fields,
            rowData: null,
            rowHeight: 45,
            headerHeight: 40,
            defaultColDef: {
                filter: false,
                resizable: false,
                editable: false,
                lockPosition: true,
                wrapText: true
            },
            overlayNoRowsTemplate: ' 데이터가 없습니다. ',
            enableCellChangeFlash: false,
            animateRows: true,
            suppressMenu: true,
            rowSelection: 'single',
            enableFilter: false
        };
    };

    const agdraw = (data, form) => {
        app.methods.fieldSet(form, (fields) => {
            let gridOptions = {
                ...setGridOptions(fields),
                onCellClicked: (params) => {
                    clickEvent(params);
                },
                components: {
                    loadingCellRenderer: function (params) {
                        if (params.value !== undefined) {
                            return params.value;
                        } else {
                            return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
                        }
                    }
                }
            };
            const gridDiv = document.querySelector('.tbody');
            const grid = new agGrid.Grid(gridDiv, gridOptions);
            app.gridOpt = gridOptions.api;
            app.gridColOpt = gridOptions.columnApi;
            gridOptions.api.setRowData(data);
        });
    };

    const agGridUpdate = (data, form) => {
        app.methods.fieldSet(form, (fields) => {
            const oldData = [];
            app.gridOpt.forEachNode(r => oldData.push(r.data));
            app.gridOpt.updateRowData({ remove: oldData });
            if (data.length > 0) {
                app.gridOpt.setColumnDefs(fields);
                app.gridOpt.updateRowData({ add: data });
            }
        });
    };

    app.grid.update = agGridUpdate;
    app.grid.agGrid = agdraw;
}());