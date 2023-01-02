import SimpleInput from './components/SimpleInput';
import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import { useRoutes } from 'react-router-dom';
import Register from "./pages/Register";
import Home from './pages/Home';
import Admin from "./pages/Admin";
import UserList from "./pages/UserList";

function App() {
  // const { telegramApi, onCloseHandler, user, onToggleButton  } = useTelegram()
  // const [test, setTest] = useState('');
  //
  // useEffect(() => {
  //   telegramApi.ready();
  //   telegramApi.MainButton.show()
  // }, [])
  //
  // const onSendData = useCallback(() => {
  //   const data = {
  //     title: test
  //   }
  //
  //   telegramApi.sendData(JSON.stringify(data))
  // }, [test])
  //
  // useEffect(() => {
  //   telegramApi.MainButton.setParams({
  //     text: 'Замовити документи'
  //   })
  // }, [])
  //
  // useEffect(() => {
  //   telegramApi.onEvent('mainButtonClicked', onSendData)
  //   return () => {
  //     telegramApi.offEvent('mainButtonClicked', onSendData)
  //   }
  //
  // }, [onSendData])


  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'register', element: <Register /> },
    { path: 'admin', element: <Admin /> },
    { path: 'userList', element: <UserList /> },
    // { path: 'galerija', element: <Gallery /> },
    // { path: 'cjenovnik', element: <Prices /> },
    // { path: 'kontakt', element: <Contact /> }
  ]);


  return (

    <div className="app">
      {routes}
    </div>
  );
}

export default App;
