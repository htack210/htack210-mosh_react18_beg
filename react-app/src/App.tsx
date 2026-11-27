// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  const [showAlert, setShowAlert] = useState(false);

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
    setShowAlert(true);
  };

  return (
    <div>
      {/* <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} /> */}

      {showAlert && <Alert onClose={() => setShowAlert(false)}>
        <h1>This is an alert!</h1>
      </Alert>}

      <MyButton onClick={handleClick}>
        <h1>Click Me</h1>
      </MyButton>
    </div>
  );
}

export default App;