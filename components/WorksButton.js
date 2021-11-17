import React from 'react';

const WorksButton = (props) => {
    return (
        <>
            <button className={`works__btn ${props.activeClass === props.index + 1 ? 'red' : ''}`}
                    onClick={props.filter}
                    data-id={props.index + 1}
                    data-name={props.type.slug}
            >
                {props.type.name}
            </button>
        </>
    );
};

export default WorksButton;
