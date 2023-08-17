import { createSlice } from "@reduxjs/toolkit"


// const Reducer = (state = [], action = {}) => {
//     switch (action.type) {
//         case 'buy': {
//             const order = [...state.order]
//             const plate = state.plate += 1
//             const exist = order.findIndex(item => item.id === action.payload.id)
//             if (exist !== -1) {
//                 order[exist].qty += 1
//                 order[exist].price *= order[exist].qty

//             } else {
//                 order.push({ qty: 1, ...action.payload })
//             }
//             return {
//                 ...state,
//                 order,
//                 plate
//             }
//         }
//         case 'del': {
//             const order = [...state.order]
//             const newOrder = order.filter((item) => (item.id !== action.payload));
//             return {
//                 ...state,
//                 order: newOrder
//             }
//         }
//         case 'clr': {
//             return {
//                 order: [],
//                 plate: 0
//             }
//         }
//         default: {
//             return {
//                 ...state
//             }
//         }

//     }
// }

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