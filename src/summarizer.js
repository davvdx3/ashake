import { createSelector } from "reselect";

const summarizer = createSelector(
    (state) => state.order || [],
    (order) => ({
        totalCost: order.reduce((i, j) => i + j.qty * j.price, 0)
    })
)

export default summarizer;