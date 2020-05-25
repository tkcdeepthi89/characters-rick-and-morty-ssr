import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import allActions from '../redux/actions';
import FilterPane from './filter/filterPane';
import ContentPane from './content/contentPane';
import HeaderNav from './header/headerNav';

const MainSection = styled.section`
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 500px) {
        display: block;
       };
`;

const SubSection = styled.section`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 78vw;
    display: flex;
    box-sizing: border-box;
   @media only screen and (max-width: 500px) {
        width:100%;
       };
`;


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.dataFetchActions.itemsFetchData());
    }, []);

    return (
        <>
            <header>
                <h2>Characters of Rick and Morty</h2>
            </header>
            <MainSection>
                <FilterPane />
                <SubSection>
                    <HeaderNav />
                    <ContentPane />
                </SubSection>
            </MainSection>
        </>
    );
};

export default App;
