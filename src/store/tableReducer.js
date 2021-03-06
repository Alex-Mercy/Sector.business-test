const ON_SET_DATA = 'ON_SET_DATA';
const SET_DATA = 'SET_DATA';
const SET_LOADED = 'SET_LOADED';
const SET_DATA_FAILURE = 'SET_DATA_FAILURE';
const SEARCH_VALUE = 'SEARCH_VALUE';
const SET_SORT_BY = 'SET_SORT_BY';
const TOGGLE_ORDER = 'TOGGLE_ORDER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const INCREMENT_PAGE = 'INCREMENT_PAGE';
const DECREMENT_PAGE = 'DECREMENT_PAGE';

const initialState = {
    isLoaded: false,
    data: [],
    error: null,
    searchValue: '',
    sortBy: 'id',
    ascOrder: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 100,
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
            case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            };
            case TOGGLE_ORDER:
            return {
                ...state,
                ascOrder: action.payload,
            };
            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
            case INCREMENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
            case DECREMENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };
        default:
            return state;
    }
}

export const onSetData= (data) => ({type: ON_SET_DATA, payload: data});
export const setLoaded = (payload) => ({type: SET_LOADED, payload});
export const setData = (data) => ({type: SET_DATA, payload: data})
export const setDataFailure = (error) => ({type: SET_DATA_FAILURE, payload: error});
export const addSearchValue = (value) => ({type: SEARCH_VALUE, payload: value});
export const setSortBy = (type) => ({type: SET_SORT_BY, payload: type});
export const toggleOrder = (ascOrder) => ({type: TOGGLE_ORDER, payload: ascOrder});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const incrementPage = () => ({type: INCREMENT_PAGE});
export const decrementPage = () => ({type: DECREMENT_PAGE});


export default tableReducer;