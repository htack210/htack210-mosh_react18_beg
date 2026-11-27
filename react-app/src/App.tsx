// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // const cities = [
  //   'People\'s Republic of New York',
  //   'People\'s Republic of San Francisco',
  //   'Tokyo',
  //   'Caliphate of London',
  //   'Caliphate of Paris'
  // ];

  // const handleSelectItem = (index: number, item: string) => {
  //   console.log(index, item);
  // };

  return (
    <>
      {/* <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} /> */}
      <Alert>
        <h1>This is an alert!</h1>
      </Alert>
    </>
  );
}

export default App;