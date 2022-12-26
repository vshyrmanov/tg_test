const tg = window.Telegram.WebApp;

export const useTelegram = () => {
	const onCloseHandler = () => {
		tg.close();
	}

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}

	return {
			telegramApi: tg,
			onCloseHandler,
			user: tg.initDataUnsafe?.user,
			onToggleButton
	}
}