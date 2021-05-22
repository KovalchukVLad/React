
const initial = {
    arry: []
}

export const reducer = (state=initial, action) =>{
    switch (action.type){
        case 'add':{
            return {
                ...state,
                state: state.arry.push(action.payload)//
            }
        }
        case 'delete':{
            console.log(state);
            return {
                ...state,
                // state: state.arry.filter(value => {
                //     if (value.id !== action.payload + '') {
                //         return value;
                //     }
                // })

                // state: state.arry.filter((value) => {
                //     if (value.id !== action.payload+''){
                //         state.arry.push(value);
                //     }
                // })
            }
        }
        default:
            return state;
    }
}