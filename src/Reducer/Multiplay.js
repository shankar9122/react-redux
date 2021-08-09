const initialState = 5;

const multTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLICATION":
            return state * action.payload;
        case "DIVISION":
            return state / action.payload;
            default : return state;
    }
}

export default multTheNumber