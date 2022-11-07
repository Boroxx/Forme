import "./App.css";
import { Forme } from "./component/Forme";
import { forms } from "./models/testModel";

function App() {
  return (
    <div className='App'>
      <Forme formDialogs={forms} />
    </div>
  );
}

export default App;
