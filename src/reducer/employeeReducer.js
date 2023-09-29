const initialState = {
    data: []
};

export default (state = initialState, action) => {

    switch (action.type) {


        case "ADD_EMPLOYEE":
            let temp = state.data
            temp = [...temp, action.payload]
            return {
                ...state,
                data: temp,
            };
        case "ADD_FAV":
            let tempFav = state.data;
            const indexVal = tempFav.findIndex(value => value.id == action.payload.id);
            if (action.payload.isFavourite) {
                tempFav[indexVal].isFavourite = false
            } else {
                tempFav[indexVal].isFavourite = true
            }


            return {
                ...state,
                data: tempFav,
            };
        default:
            return state;
    }
};
