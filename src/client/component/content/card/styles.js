import styled from 'styled-components';
const CardContainer = styled.div`
    width: 23%;
    height: auto;
    box-sizing: boredr-box;
    background: #323333;
    margin-top: 1%;
    position: relative;
    border-radius: 10px;
    hr {
        margin: 0 8px;
        opacity: 0.2;
    }
    @media only screen and (max-width: 500px) {
        width: 47%;
       };
`;

const Image = styled.img`
    height: 50%;
    width:100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const InfoDivOnImage = styled.div`
    color: white;
    width: 100%;
    height: 14%;
    background-color: rgba(50, 51, 51, 0.4);
    position: absolute;
    top: 36%;
    span {
        margin-left: 5px;
    }
    div {
        margin: 10px 0px 10px 5px;
        font-size: 1.8rem;
        @media only screen and (max-width: 500px) {
            font-size: 1.4rem;
            margin-bottom: 5px;
        };
    }
   
`;

const InfoDiv = styled.div`
    display: flex;
    width: 100%;
    color: darkgray;
    box-sizing: border-box;
    padding: 0 8px 0 8px;
    margin: 5px 0 12px 0;
    div {
        margin-left: auto;
        word-break: break-all;
        text-align: right;
        color: #b57f17;
    }
    span {
        word-break: break-all;
    }

`;

export {
    InfoDiv,
    InfoDivOnImage,
    Image,
    CardContainer

};