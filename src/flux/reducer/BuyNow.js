import C from '../../config/constant';

const initialState = {
    count: 0,
    details: []
}


const buynow = (state = initialState, action) => {
    switch (action.type) {
        case C.BUY_NOW:
            let data = [...state.details];
            let duplicateItems = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === action.payload.id) {
                    data[i].count = data[i].count + 1
                    duplicateItems.push(data[i])
                }
            }
            if (!duplicateItems.length) {
                data.push(action.payload)
            }
            data.forEach(val => {
                val.totalPrice = parseInt(val.price) * val.count
            })

            console.log(data)
            return {
                ...state,
                count: state.count + 1,
                details: data
            }
        default:
            return {
                ...state
            }
    }
}

export default buynow;