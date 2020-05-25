/* eslint-disable no-nested-ternary */
import React from 'react';
import lodash from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
    InfoDiv,
    InfoDivOnImage,
    Image,
    CardContainer
} from './styles';

const Card = ({ ...props }) => {
    const displayLabels = ['status', 'species', 'gender', 'origin', 'last location'];
    return (<CardContainer >
        <Image src={`${props.image}`} />
        <InfoDivOnImage>
            <div id={props.name}>{props.name}</div>
            <span>{`id: ${props.id} - created ${moment(props.created, "YYYYMMDD").fromNow()}`}</span>
        </InfoDivOnImage>

        {displayLabels.map(label =>
            (<span key={label}>
                <InfoDiv>
                    <span>{label.toUpperCase()}</span>
                    <div>{label === 'origin' ? lodash.get(props, 'origin.name') : label === 'last location' ?
                        lodash.get(props, 'location.name') : props[label]}</div>
                </InfoDiv>
                <hr />
            </span>)
        )}

    </CardContainer>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Card;
