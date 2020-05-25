import lodash from 'lodash';

const initialState = {
    hasErrored: false,
    isLoading: false,
    data: [],
    masterData: [],
    selectedFilters: [],
    searchField: ''
};
export function fetchData(state = initialState, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        case 'ITEMS_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading}
        case 'ITEMS_FETCH_DATA_SUCCESS':{
            
            return {
                ...state,
                data: action.items.results,
                masterData: lodash.cloneDeep(action.items.results)}
        }
        case 'ASCENDING':
            return {
                ...state,
                data: Array.from(state.data).sort((a,b) => {return a.id - b.id})
            }

        case 'DESCENDING':
            
            return {
                ...state,
                data: Array.from(state.data).sort((a,b) => {return b.id - a.id})
            }
        case 'SEARCH':
            if (action.payload === '' && state.data.length !== 20 && state.selectedFilters.length === 0){
                return {
                    ...state,
                    searchField: action.payload,
                    data: lodash.cloneDeep(state.masterData)
                }
            }
            if (action.payload.length > 0 && state.selectedFilters.length > 0){
                return {
                    ...state,
                    searchField: action.payload,
                    data: state.data.filter(item => item.name.toLowerCase().includes(action.payload))
                }
            }
            return {
                ...state,
                searchField: action.payload,
                data: state.masterData.filter(item => item.name.toLowerCase().includes(action.payload))
            }
        case 'FILTER': {
            let selectedFilters = Array.from(state.selectedFilters);
            if(action.payload.selected)
                selectedFilters.push(action.payload);
            else {
                const ind = selectedFilters.findIndex( i => lodash.isEqual(i, action.payload))
                if(ind >= 0) selectedFilters.splice(ind,1)
                }

            let filteredData = [];
            const items = state.searchField.length > 0 ? lodash.cloneDeep(state.data) : lodash.cloneDeep(state.masterData);
            selectedFilters.forEach(item => {
                filteredData.push(items.filter(i => i[item.title] === item.name));
            })
            const flattenData = lodash.flatten(filteredData);
            let finalData = [];
            if(flattenData.length > 0){
                finalData = lodash.uniq(flattenData, 'id');
                if(state.searchField.length > 0)
                    finalData = finalData.filter(item => item.name.toLowerCase().includes(state.searchField));
            }
            return {
                ...state,
                selectedFilters: selectedFilters,
                removedFilter: action.payload.selected ? null : action.payload,
                data: flattenData.length > 0 ? finalData : state.masterData

            }
        }
           
        default:
            return state;
    }
}