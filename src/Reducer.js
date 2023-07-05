

const Reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'buy': {
            const order = [...state.order]
            const plate = state.plate += 1
            const exist = order.findIndex(item => item.id === action.payload.id)
            if (exist !== -1) {
                order[exist].qty += 1
                order[exist].price *= order[exist].qty

            } else {
                order.push({ qty: 1, ...action.payload })
            }
            return {
                ...state,
                order,
                plate
            }
        }
        case 'del': {
            const order = [...state.order]
            const newOrder = order.filter((item) => (item.id !== action.payload));
            return {
                ...state,
                order: newOrder
            }
        }
        case 'clr': {
            return {
                order: [],
                plate: 0
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}

export default Reducer;