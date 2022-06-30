import React from 'react';
import './ratestar.scss';
import { FaStar } from "react-icons/fa";
import { filledInputClasses } from '@mui/material';

function RateStar() {


    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);



    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver =value => {
        setHoverValue(value)
    };

    const handleMouseLeave =value => {
        setHoverValue(undefined)
    };




    const colors = {
        orange: "#FFC433",
        grey: "#CAC9C6"
    }

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
    }



    return(
        <div style={styles.container}>
            <h2> Rate movie </h2>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={28}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default RateStar;