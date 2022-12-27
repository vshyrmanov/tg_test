import SimpleInput from './components/SimpleInput';
import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import { useRoutes } from 'react-router-dom';
import Register from "./pages/Register";
import Home from './pages/Home';

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
    telegramApi.onEvent('mainButtonClicked', onSendData)
    return () => {
      telegramApi.offEvent('mainButtonClicked', onSendData)
    }

  }, [onSendData])


  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'register', element: <Register /> },
    // { path: 'usluge', element: <Services /> },
    // { path: 'galerija', element: <Gallery /> },
    // { path: 'cjenovnik', element: <Prices /> },
    // { path: 'kontakt', element: <Contact /> }
  ]);


  return (
    routes
    // <div className="app">
    //
    //   {/*<SimpleInput />*/}
    //   {/*<input value={test} onChange={(e) => setTest(e.target.value)} />*/}
    //   {/*{useEffectr?.username && <span>{`Hello, ${user?.username}`}</span>}*/}
    //   {/*<button onClick={onToggleButton}>Довідка про склад родини</button>*/}
    //   {/*<button onClick={onCloseHandler}>Закрити</button>*/}
    // </div>
  );
}

export default App;
