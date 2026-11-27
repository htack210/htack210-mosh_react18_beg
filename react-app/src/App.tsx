// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

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
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      {/* <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} /> */}
      <Alert>
        <h1>This is an alert!</h1>
      </Alert>
      <MyButton onClick={handleClick}>
        <h1>Click Me</h1>
      </MyButton>
    </>
  );
}

export default App;