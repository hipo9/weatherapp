

const type = {
    isLoad: 'setLoaf',
}
export const weatherReducer = ( state = {}, action ) => {

    switch ( action ) {
        case 'ADD-WEATHER':
            return {
                ...state,
                weather: action.payload,
                isLoading: true,
                isDataLoaded: true,

            }

            break;
        default:
            break;
    }

}
