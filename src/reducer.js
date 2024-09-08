import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    value: '',
    count: '',
    action: ''
};

const RootReducer = createReducer(initialState, builder => {
    builder 
        .addCase('UPD', (state, action) => {
            state.value = action.payload;
        })
        .addCase('ENT', (state) => {
            if (state.value !== '' && state.action !== '') {
                if (state.count === '') {
                    state.count = parseFloat(state.value);
                } else {
                    switch (state.action) {
                        case '+':
                            state.count = parseFloat(state.count) + parseFloat(state.value);
                            break;
                        case '-':
                            state.count = parseFloat(state.count) - parseFloat(state.value);
                            break;
                        case '*':
                            state.count = parseFloat(state.count) * parseFloat(state.value);
                            break;
                        case '/':
                            if (state.value !== '0') {
                                state.count = parseFloat(state.count) / parseFloat(state.value);
                            } else {
                                state.count = 'Ошибка: деление на ноль';
                            }
                            break;
                        default:
                            state.count = parseFloat(state.value);
                    }
                }
                state.value = '';
                state.action = '';
            }
        })
        .addCase('CLS', (state) => {
            state.value = '';
            state.count = '';
            state.action = '';
            state.type = '';
        })
        .addCase('SUM', (state) => {
            state.action = '+';
            state.count = parseFloat(state.value);
            state.value = '';
        })
        
});

export default RootReducer;