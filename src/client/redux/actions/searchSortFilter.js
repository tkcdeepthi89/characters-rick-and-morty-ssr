const ascending = () => {
    return {
        type: "ASCENDING"
    }
}

const descending = () => {
    return {
        type: "DESCENDING"
    }
}

const search = (name) =>(dispatch, getState) => {
  
    if(getState().fetchData.selectedFilters.length > 0 && name === ''){
        return (dispatch(filter(getState().fetchData.selectedFilters)));
    }
    if(name === '' && getState().fetchData.data.length === 20){
        return false;
    }
    return (dispatch(enterSearch(name)));
}

const enterSearch = (name) => {
    return {
        type: "SEARCH",
        payload: name
    }
}

const filter = (options) => {
    return {
        type: "FILTER",
        payload: options
    }
}

export default {
    ascending,
    descending,
    search,
    filter
}