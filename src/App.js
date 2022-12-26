import SimpleInput from './components/SimpleInput';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onCloseHandler = () => {
    tg.close();
  }
  return (
    <div className="app">
      {/*<SimpleInput />*/}
      <button onClick={onCloseHandler}>Закрити</button>
    </div>
  );
}

export default App;
