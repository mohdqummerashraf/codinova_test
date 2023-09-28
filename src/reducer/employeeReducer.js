const initialState = {
    data: []
};

export default (state = initialState, action) => {

    switch (action.type) {

        case "ADD_EMPLOYEE":
            // let temp = {};
            // temp.push(action.payload);

            return {
                ...state,
                data: [action.payload, ...state.data],
            };
        default:
            return state;
    }
};
