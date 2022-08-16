/*global app */
(function () {
    const field_maker = {
        basic: (opt) => {
            let temp = {
                headerName: opt.header,
                field: opt.dataIndex,
                width: opt.width,
                headerClass: opt.headerClass
            };
            if (opt.align) {
                temp.cellStyle = {
                    'text-align': opt.align || 'center'
                };
            }
            if (opt.padding) {
                temp.cellStyle = {
                    'padding-left': `${opt.padding}px`
                };
            }
            if (opt.font) {
                temp.cellStyle = {
                    ...temp.cellStyle,
                    'font-family': `'${opt.font}'`
                };
            }
            if (opt.render) {
                temp.cellRenderer = opt.render;
            }
            if (opt.sortable) {
                temp.sortable = opt.sortable;
            }
            if (opt.comparator) {
                temp.comparator = opt.comparator;
            }
            if (opt.pinned) {
                temp.pinned = opt.pinned;
            }
            return temp;
        }
    };

    app.grid.field_maker = field_maker;
}());