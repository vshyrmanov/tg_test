import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../hooks/useTelegram";


const Register = () => {
	const { telegramApi, onCloseHandler, user, onToggleButton  } = useTelegram();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [thirdName, setThirdName] = useState('');
	const [personalNumber, setPersonalNumber] = useState('');

	useEffect(() => {
		telegramApi.ready();
		// telegramApi.MainButton.show()
	}, [])

	useEffect(() => {
		if (!firstName || !lastName) {
			telegramApi.MainButton.hide()
		} else {
			telegramApi.MainButton.show()
		}
	}, [firstName, lastName])

	const onSendData = useCallback(() => {
		const data = {
			firstName,
			lastName,
			thirdName,
			personalNumber
		}

		telegramApi.sendData(JSON.stringify(data))
	}, [firstName, lastName, thirdName, personalNumber])

	useEffect(() => {
		telegramApi.MainButton.setParams({
			text: 'Зареєструватись'
		})
	}, [])

	useEffect(() => {
		telegramApi.onEvent('mainButtonClicked', onSendData)
		return () => {
			telegramApi.offEvent('mainButtonClicked', onSendData)
		}

	}, [onSendData])

	const handleFirstName = (e) => {
		setFirstName(e.target.value)
	}

	const handleLastName = (e) => {
		setLastName(e.target.value)
	}
	const handleThirdName = (e) => {
		setThirdName(e.target.value)
	}
	const handlePersonalNumber = (e) => {
		setPersonalNumber(e.target.value)
	}


	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<p>{user?.id || "nothing"}</p>
			<label>Вкажіть імя</label>
			<input value={firstName} onChange={handleFirstName} />
			<label>Вкажіть Прізвище</label>
			<input value={lastName} onChange={handleLastName} />
			<label>Вкажіть По-батькові</label>
			<input value={thirdName} onChange={handleThirdName} />
			<label>Вкажіть особистий номер</label>
			<input value={personalNumber} onChange={handlePersonalNumber} />
			<button >check</button>
		</div>
	);
};

export default Register;