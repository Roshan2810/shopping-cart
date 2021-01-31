import C from '../../config/constant';

const initialState = {
    count: 0,
    details: []
}


const buynow = (state = initialState, action) => {
    switch (action.type) {
        case C.BUY_NOW:
            let data = [...state.details, action.payload]
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