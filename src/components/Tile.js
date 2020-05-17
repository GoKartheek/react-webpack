import React from 'react';

const Tile = ({name}) => {
    const tileStyle = {
        width: '200px',
        padding: '10px 0',
        margin: '5px 0',
        backgroundColor: '#bada55',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div style={tileStyle}>
            {name}
        </div>
    )
}

export default Tile;