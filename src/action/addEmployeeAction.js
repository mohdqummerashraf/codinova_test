export const addEmployeeAction = (data) => {

    return {
        type: "ADD_EMPLOYEE",
        payload: data,
    }
};
export const addFavEmployeeAction = (id) => {

    return {
        type: "ADD_FAV",
        payload: id,
    }
};