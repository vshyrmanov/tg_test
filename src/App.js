import SimpleInput from './components/SimpleInput';
import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
  const { telegramApi, onCloseHandler, user, onToggleButton  } = useTelegram()
  const [test, setTest] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    telegramApi.ready();
  }, [])

  useEffect(() => {
    if (test.length > 3) {
      onToggleButton()
    }
  }, [test])

  // const onSendData = useCallback(() => {
    const data = {
      title: test
    }
    telegramApi.sendData(JSON.stringify(data))
  //   // onCloseHandler()
  // }, [test])

  const onSendData = () => {
    const data = {
      title: test
    }
    telegramApi.sendData(JSON.stringify(data))
    setShow(prev => !prev)
  }

  useEffect(() => {
    telegramApi.MainButton.setParams({
      text: 'Замовити документи'
    })
  }, [])

  // useEffect(() => {
  //   telegramApi.MainButton.onClick(onSendData)
  //   return () => {
  //     telegramApi.MainButton.offClick(onSendData)
  //   }
  // }, [])

  useEffect(() => {
    telegramApi.onEvent('mainButtonClicked', onSendData)
    return () => {
      telegramApi.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])


  return (
    <div className="app">
      {/*<SimpleInput />*/}
      <input value={test} onChange={(e) => setTest(e.target.value)} />
      {user?.username && <span>{`Hello, ${user?.username}`}</span>}
      {show && <span>GOOD JOB!!!</span>}

      {/*<button onClick={onToggleButton}>Довідка про склад родини</button>*/}
      <button onClick={onCloseHandler}>Закрити</button>
    </div>
  );
}

export default App;
