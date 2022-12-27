import SimpleInput from './components/SimpleInput';
import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
  const { telegramApi, onCloseHandler, user, onToggleButton  } = useTelegram()
  const [test, setTest] = useState('');

  useEffect(() => {
    telegramApi.ready();
    telegramApi.MainButton.show()
  }, [])

  const onSendData = useCallback(() => {
    const data = {
      title: test
    }

    telegramApi.sendData(JSON.stringify(data))
  }, [test])

  useEffect(() => {
    telegramApi.MainButton.setParams({
      text: 'Замовити документи'
    })
  }, [])

  useEffect(() => {
    // telegramApi.onEvent('mainButtonClicked', onSendData)
    // return () => {
    //   telegramApi.offEvent('mainButtonClicked', onSendData)
    // }
    telegramApi.onEvent('mainButtonClicked', () => {
      telegramApi.sendData('Hello world')
    })
  }, [])


  return (
    <div className="app">
      {/*<SimpleInput />*/}
      <input value={test} onChange={(e) => setTest(e.target.value)} />
      {user?.username && <span>{`Hello, ${user?.username}`}</span>}
      <button>Send data</button>
      {/*<button onClick={onToggleButton}>Довідка про склад родини</button>*/}
      <button onClick={onCloseHandler}>Закрити</button>
    </div>
  );
}

export default App;
