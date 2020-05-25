import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import PropTypes from 'prop-types';

export const SvgContainer = styled.svg`
    color: rgb(0,0,0);
    opacity: 26%;
    position: relative;
    left: 5px;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
`;


const CrossIcon = ({ option }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        option.selected = false;
        dispatch(allActions.sortActions.filter(option));
    };

    return (<SvgContainer onClick = {handleClick} viewBox="0 0 24 24">
        <path onClick = {handleClick} d="M12 0c6.636 0 12 5.364 12 12s-5.364 12-12 12S0 18.636 0 12 5.364
        0 12 0zm6 16.308L13.692 12 18 7.692 16.308 6 12
        10.308 7.692 6 6 7.692 10.308 12 6 16.308 7.692 18 12 13.692 16.308 18 18 16.308z"
        />
    </SvgContainer>);
};

CrossIcon.propTypes = {
    option: PropTypes.object.isRequired
};

export default CrossIcon;
