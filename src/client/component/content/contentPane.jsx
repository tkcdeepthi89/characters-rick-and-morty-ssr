import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from './card/card';

const ContainerDiv = styled.div`

    height: 75vh;
    width: 78vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: scroll;
    box-sizing: border-box;
    @media screen and (max-width: 500px)  {
        width:100%;
        height: auto;
       };
`;

const ContentPane = () => {
    let data = useSelector(state => state.fetchData.data);
    const masterData = useSelector(state => state.fetchData.masterData);

    /*  const handleSortChange = () => {
        if(sortDir === 0){
            console.log('came')
             cardData.sort((a,b) => {return b.id - a.id});
            setData(cardData => ([ ...cardData]));
        } else if(sortDir === 1) {
            cardData.sort((a,b) => {return a.id - b.id});
            setData(cardData => ([ ...cardData]));
        }
    }
    useEffect(()=> {

        handleSortChange();
    }, [sortDir]);  */
    const [cardData, setData] = useState(Array.from(data));
    useEffect(() => {
        setData(data);
    }, [data]);


    return (<ContainerDiv>
        {cardData.length === 0 && masterData.length === 0 && <h3>Loading...</h3>}
        {cardData.length === 0 && masterData.length > 0 && <h3>No data for selected filters</h3>}
        {cardData.length > 0 && cardData.map(info => <Card key={info.id} {...info} />)}
    </ContainerDiv>);
};

export default ContentPane;
