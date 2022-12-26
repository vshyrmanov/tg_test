import SimpleInput from './components/SimpleInput';
import {useCallback, useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
  const { telegramApi, onCloseHandler, user, onToggleButton  } = useTelegram()

  useEffect(() => {
    telegramApi.ready();
  }, [])


  return (
    <div className="app">
      <SimpleInput />
      {user?.username && <span>{`Hello, ${user?.username}`}</span>}
      {/*<button onClick={onToggleButton}>Довідка про склад родини</button>*/}
      <button onClick={onCloseHandler}>Закрити</button>
    </div>
  );
}

export default App;
