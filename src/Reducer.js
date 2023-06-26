

const Reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'buy': {
            const order = [...state.order]
            const plate = state.plate += 1
            const exist = order.findIndex(item => item.id === action.payload.id)
            if (exist !== -1) {
                order[exist].qty = order[exist].qty + 1

            } else {
                order.push({ qty: 1, ...action.payload })
            }
            return {
                ...state,
                order,
                plate
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