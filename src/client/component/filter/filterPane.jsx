import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import allActions from '../../redux/actions';
import lodash from 'lodash';

const FilterWrapper = styled.div`

    height: auto;
    width: 20vw;
    box-sizing: border-box;
    @media only screen and (max-width: 500px)  {
      width: auto;
    
     };
`;

const FilterContainer = styled.div`
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 10px;
`;


const FilterPane = () => {
    const dispatch = useDispatch();
    const checkboxVal = useRef(null);
    const [filterOptions, setFilterOptions] = useState([]);
    // const [selectedFilters, setselectedFilters] = useState([]);
    const data = useSelector(state => state.fetchData.masterData);
    const removedFilter = useSelector(state => state.fetchData.removedFilter);
    let options = [];

    //options to create
    const createFilterOptions = (item) => {
        item.forEach(i => options.push({
            title: i,
            values: i === 'origin' ? lodash.uniq(data.map(j => j.origin.name)) : lodash.uniq(data.map(j => j[i]))
        }));
    };
    createFilterOptions(['species', 'gender', 'origin']);

    useEffect(() => {
        setFilterOptions(options);
    }, [data]);

    useEffect(() => {
        if (removedFilter && removedFilter.selected === false) {
            let selectedFilter = document.getElementById(`${removedFilter.option}`);
            selectedFilter.checked = false;
        }
    }, [removedFilter]);

    const handleCheckbox = (event) => {
        dispatch(allActions.sortActions.filter({ name: event.target.value, selected: event.target.checked,
            option: event.target.id, title: event.target.name }));
    };

    return (<FilterWrapper ref={checkboxVal}>
        <div id="filter"><h2>Filters</h2>  </div>
        {filterOptions && filterOptions.map(option => (<FilterContainer id={option.title} key={option.title}>
            <h3>{lodash.startCase(option.title)}</h3>
            {option.values && option.values.map(item => (<div key={`${option.title}-${item}`}>
                <input type="checkbox" id={`${option.title}-${item}`} name={option.title}
                    value={item} onChange={handleCheckbox}/>
                <label htmlFor={item}>{item}</label>

            </div>))}
        </FilterContainer>))}
    </FilterWrapper>);
};

export default FilterPane;
