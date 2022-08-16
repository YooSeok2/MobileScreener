/*global app */
(function () {
    const setFaovoriteColor = (condition) => {
        let favoriteColor = 'color-g';
        if (condition) {
            favoriteColor = 'color-y';
        }
        return favoriteColor;
    };

    app.grid.formatter = {
        drawFavorite: (tt) => {
            let result = '';
            const favorited = app.codes.some(code => code === tt.value);
            const favoriteColor = setFaovoriteColor(favorited);
            result = `<i class="fas fa-star toggle-star ${favoriteColor}" 
                        id="${tt.value}" style="cursor:pointer;"></i>`;
            return result;
        },
        drawRatio: (tt) => {
            let result = '';
            const color = app.methods.setRatioColor(Number(tt.value));
            result = `<span class="${color}">${tt.value}</span>`;
            return result;
        },
        setCommas: (tt) => {
            return app.methods.commas(tt.value);
        },
        comparator: function (valueA, valueB) {
            let valA = valueA;
            let valB = valueB;
            if (!isNaN(valA) || !isNaN(valB)) {
                valA = Number(valA);
                valB = Number(valB);
            }
            if (valA < valB) {
                return -1;
            } else if (valA > valB) {
                return 1;
            } else {
                return 0;
            }
        }
    };
}());