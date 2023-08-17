import { createSlice } from "@reduxjs/toolkit"

const reducerSlice = createSlice({
    name: 'reducer',
    initialState: {
        order: [],
        plate: 0
    },
    reducers: {
        buy: (state, action) => {
            state.plate += 1
            const exist = state.order.findIndex(item => item.id === action.payload.id)
            if (exist !== -1) {
                state.order[exist].qty += 1
                state.order[exist].price *= state.order[exist].qty

            } else {
                state.order.push({ qty: 1, ...action.payload })
            }

        },
        del: (state, action) => {
            const order = [...state.order]
            const newOrder = order.filter((item) => (item.id !== action.payload));
            return {
                ...state,
                order: newOrder
            }
        },
        clr: () => {
            return {
                order: [],
                plate: 0
            }
        }
    }
})

export const { buy, del, clr } = reducerSlice.actions;

export const selectCount = (state) => state.reducer.order;

export default reducerSlice.reducer;