import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../hooks/useTelegram";
import {useLocation} from "react-router-dom";

const Register = () => {
	const { telegramApi, onCloseHandler, user, onToggleButton  } = useTelegram();
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [thirdName, setThirdName] = useState('');
	const [personalNumber, setPersonalNumber] = useState('');
	const [rank, setRank] = useState('');

	const search = useLocation();
	// console.log(search.search.split('&').map(e => ({[e.split('=')[0].slice(1)]: e.split('=')[1]})))
	// console.log(search)
	useEffect(() => {
		telegramApi.ready();
		// telegramApi.MainButton.show()
	}, [])

	useEffect(() => {
		if (!firstName || !secondName) {
			telegramApi.MainButton.hide()
		} else {
			telegramApi.MainButton.show()
		}
	}, [firstName, secondName])

	const onSendData = useCallback(() => {
		const data = {
			rank,
			firstName,
			secondName,
			thirdName,
			personalNumber,
			chat_id: search?.search.slice(1)
		}

		telegramApi.sendData(JSON.stringify(data))
	}, [firstName, secondName, thirdName, personalNumber])

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

	const handleSecondName = (e) => {
		setSecondName(e.target.value)
	}
	const handleThirdName = (e) => {
		setThirdName(e.target.value)
	}
	const handlePersonalNumber = (e) => {
		setPersonalNumber(e.target.value)
	}
	const handleRank = (e) => {
		setRank(e.target.value)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
			<p>{search?.search || "nothing"}</p>

			<label>Військове звання</label>
			<input value={rank} onChange={handleRank} />
			<label>Ім'я</label>
			<input value={firstName} onChange={handleFirstName} />
			<label>Прізвище</label>
			<input value={secondName} onChange={handleSecondName} />
			<label>По-батькові</label>
			<input value={thirdName} onChange={handleThirdName} />
			<label>Вкажіть особистий номер</label>
			<input value={personalNumber} onChange={handlePersonalNumber} />
			{/*<button>check</button>*/}
		</div>
	);
};

export default Register;