import styled from 'styled-components';

const HeaderDiv = styled.div`

    padding: 10px;
    box-sizing: border-box;
    h2 {
        margin-left: 10px;
        margin-top: 0;
    }
`;

const ContentWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;  
    @media screen and (max-width: 500px)  {
       flex-direction: column;      
    }
`;

const SearchWrapper = styled.div`
       display:flex;
       flex-direction:column;
       button {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        width: 50px;
        height: 36px;
        background: lightgray;
       }
       input {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        width: 250px;
        height: 30px;
       }
      
`;

const SortDiv = styled.div`
       display:flex;
       flex-direction:column;
       select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        width: 100px;
        height: 30px;
        float:right;
        border-radius: 0px;
        padding-left: 5px;
       }
      
`;

const Badge = styled.div`
       background: lightgray;
       border-radius: 5px;
       padding: 6px;
       display: flex;
       margin-right: 10px;
       margin-bottom: 10px;
       button {
           background: lightgray;
           border-radius: 5px;
           -moz-appearance: none;
           -webkit-appearance: none;
           appearance: none;
       }
`;

const BadgeWrapper = styled.div`
    display:flex;
    margin-bottom:8px;
    flex-wrap: wrap;
`;

const SelectedFiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        margin-bottom:8px;
    }
`;


export {
    HeaderDiv,
    BadgeWrapper,
    Badge,
    SortDiv,
    SearchWrapper,
    ContentWrapper,
    SelectedFiltersWrapper
}; 