import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "../hooks/useTelegram";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const { telegramApi, onToggleButton } = useTelegram();

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return
    }
    // console.log(enteredName)
    setEnteredName('');
    setEnteredNameTouched(false);
    onToggleButton()
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  const onSendData = useCallback(() => {
   const data = {
     title: enteredName
   }
   telegramApi.sendData(JSON.stringify(data))
    onToggleButton()
  }, [])

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
  }, [])

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Документ</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Додати документ</button>
      </div>
    </form>
  );
};

export default SimpleInput;
