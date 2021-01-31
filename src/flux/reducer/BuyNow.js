import C from '../../config/constant';

const initialState = {
    count: 0,
    details: []
}


const buynow = (state = initialState, action) => {
    switch (action.type) {
        case C.BUY_NOW:
            let data = [state.details]
            data.map((val, index) => {
                if (val.id === action.payload.details.id) {
                    val.count ? val.count = val.count + 1 : val.count = 1
                }
            })



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