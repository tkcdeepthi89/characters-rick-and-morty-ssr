import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import CrossIcon from './icon';
import {
    HeaderDiv,
    BadgeWrapper,
    Badge,
    SortDiv,
    SearchWrapper,
    ContentWrapper,
    SelectedFiltersWrapper
} from './styles';


const HeaderNav = () => {
    return (<HeaderDiv>
        <SelectedFilters />
        <ContentWrapper>
            <Search />
            <Sort />
        </ContentWrapper>

    </HeaderDiv>);
};

export const SelectedFilters = () => {
    const selectedFilters = useSelector(state => state.fetchData.selectedFilters);

    const [dataForBadges, setData] = useState([]);

    useEffect(() => {
        setData(selectedFilters);
    }, [selectedFilters]);


    return (<SelectedFiltersWrapper>
        {dataForBadges.length > 0 && <h4> Selected Filter</h4>}
        <BadgeWrapper>
            {
                dataForBadges.length > 0 && dataForBadges.map(option => (<Badge key={option.name}>
                    <label>{option.name}</label>
                    <CrossIcon option={option} />
                </Badge>))
            }
            <br />
        </BadgeWrapper >
    </SelectedFiltersWrapper>);
};

export const Search = () => {
    const dispatch = useDispatch();
    const inputVal = useRef(null);
    const handleSearch = () => {
        dispatch(allActions.sortActions.search(inputVal.current.value.trim()));
    };
    return (<> <SearchWrapper>
        <label className="searchHeading">Search By Name</label>
        <div>
            <input type="text" id="searchInput" ref={inputVal} />
            <button type="button" onClick={handleSearch}>Search</button>
        </div>

    </SearchWrapper></>);
};

export const Sort = () => {
    const dispatch = useDispatch();
    const handleSortChange = (event) => {
        if (event.target.value === '0') {
            dispatch(allActions.sortActions.ascending());
        } else { dispatch(allActions.sortActions.descending()); }
    };
    return (<>
        <SortDiv>
            <label>Sort by ID</label>
            <select name="sort-characters" onChange={handleSortChange}>
                <option value="0">Ascending</option>
                <option value="1">Desending</option>

            </select>
        </SortDiv></>);
};

export default HeaderNav;
