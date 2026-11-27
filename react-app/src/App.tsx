import ListGroup from "./components/ListGroup";

function App() {
  const cities = [
    'People\'s Republic of New York',
    'People\'s Republic of San Francisco',
    'Tokyo',
    'Caliphate of London',
    'Caliphate of Paris'
  ];

  const handleSelectItem = (index: number, item: string) => {
    console.log(index, item);
  };

  return <div>
    <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} />
  </div>;
}

export default App;