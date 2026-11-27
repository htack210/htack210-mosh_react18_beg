import ListGroup from "./components/ListGroup";

function App() {
  let cities = [
    'People\'s Republic of New York',
    'People\'s Republic of San Francisco',
    'Tokyo',
    'Caliphate of London',
    'Caliphate of Paris'
  ];

  cities = [
    'People\'s Republic of Boston',
    'People\'s Republic of Seattle',
    'Beijing',
    'Caliphate of Austin',
    'Caliphate of Atlanta'
  ];

  const handleSelectItem = (index: number, item: string) => {
    console.log(index, item);
  };

  return <div>
    <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} />
  </div>;
}

export default App;