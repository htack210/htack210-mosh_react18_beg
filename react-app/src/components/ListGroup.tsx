function ListGroup() {

    let items = [
        'People\'s Republic of New York',
        'People\'s Republic of San Francisco',
        'Tokyo',
        'London',
        'Caliphate of Paris'
    ];

    items = [];

    const getMessage = () => {
        if (items.length === 0) return <p>No item(s) found.</p>;
        return null;
    };

    return (
        <>
            <h1>Boring (YAWN) List Group</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>);

}

export default ListGroup;