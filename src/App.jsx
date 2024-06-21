import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="primary" />
        <Button color="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert icon="error" text="This is error alert box"/>
        <Alert icon="warning" text="This is warning alert box"/>
        <Alert icon="info" text="This is info alert box"/>
        <Alert icon="success" text="This is success alert box"/>
      </div>
    </div>
  );
}

export default App;
