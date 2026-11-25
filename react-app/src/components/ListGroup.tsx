import { useState, type MouseEvent } from 'react';

function ListGroup() {

    let items = [
        'People\'s Republic of New York',
        'People\'s Republic of San Francisco',
        'Tokyo',
        'Caliphate of London',
        'Caliphate of Paris'
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Event handler
    const handleClick = (event: MouseEvent, index: number, item: string) => {
        console.log(event, index, item);
        setSelectedIndex(index);
    };

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No item(s) found.</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={index}
                        onClick={(event) => handleClick(event, index, item)}>
                        {item}
                    </li>
                ))}
            </ul >
        </>);

}

export default ListGroup;