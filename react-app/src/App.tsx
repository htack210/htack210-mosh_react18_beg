import ListGroup from "./components/ListGroup";

function App() {
  let cities = [
    'People\'s Republic of New York',
    'People\'s Republic of San Francisco',
    'Tokyo',
    'Caliphate of London',
    'Caliphate of Paris'
  ];
  return <div>
    <ListGroup items={cities} heading="Cities" />
  </div>;
}

export default App;