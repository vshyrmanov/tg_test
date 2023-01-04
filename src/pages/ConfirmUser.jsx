import React from 'react';
import {useLocation} from "react-router-dom";

const ConfirmUser = () => {
	const search = useLocation()
	const data = search?.search.split('&').map(e => ({[e.split('=')[0].slice(1)]: e.split('=')[1]}));
	return (
		<div>
			<h1>Confirm user</h1>
			{data?.map(user =>
				<React.Fragment>
					<span>{user.chatId}</span>
					<span>{user.firstName}</span>
					<span>{user.secondName}</span>
					<span>{user.thirdName}</span>
					<span>{user.personalNumber}</span>
					<span>{user.rank}</span>
				</React.Fragment>
			)}
		</div>
	);
};

export default ConfirmUser;