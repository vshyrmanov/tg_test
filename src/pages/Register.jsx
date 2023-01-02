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
			register: true,
			firstName,
			lastName,
		}

		telegramApi.sendData(JSON.stringify(data))
	}, [firstName, lastName])

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
			<label>Вкажіть імя</label>
			<input value={firstName} onChange={handleFirstName} />
			<label>Вкажіть Прізвище</label>
			<input value={lastName} onChange={handleLastName} />
			<label>Вкажіть По-батькові</label>
			<input value={lastName} onChange={handleThirdName} />
			<label>Вкажіть особистий номер</label>
			<input value={lastName} onChange={handlePersonalNumber} />
		</div>
	);
};

export default Register;