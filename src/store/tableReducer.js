const ON_SET_DATA = 'ON_SET_DATA';
const SET_DATA = 'SET_DATA';
const SET_LOADED = 'SET_LOADED';
const SET_DATA_FAILURE = 'SET_DATA_FAILURE';
const SEARCH_VALUE = 'SEARCH_VALUE';

const initialState = {
    isLoaded: false,
    data: [],
    error: null,
    pagesCount: 5,
    searchValue: '',

};


const tableReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOADED: 
            return {
                ...state,
                isLoaded: action.payload,
            };
        case SET_DATA: 
            return {
                ...state,
                data: action.payload,
                isLoaded: true,
            }; 
        case SET_DATA_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }; 
            case SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        default:
            return state;
    }

}

export const onSetData= () => ({
    type: ON_SET_DATA,
});

export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload,
});

export const setData = (data) => ({
    type: SET_DATA,
    payload: data
})

export const setDataFailure = (error) => ({
    type: SET_DATA_FAILURE,
    payload: error,
  });

  export const addSearchValue = (value) => ({
    type: SEARCH_VALUE,
    payload: value,
});


export default tableReducer;