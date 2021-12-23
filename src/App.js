import "./App.css";
import { Header, Main } from "./components/";
import ContactsContextProvider from "./components/Context/ContactsContext";

function App() {
  return (
    <div className="App">
      <ContactsContextProvider>
        <Header />
      </ContactsContextProvider>
      <Main />
    </div>
  );
}

export default App;
