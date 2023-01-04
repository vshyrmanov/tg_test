import React from 'react';
import {useLocation} from "react-router-dom";

const ConfirmUser = () => {
	const search = useLocation()
	console.log(search.search)
	return (
		<div>
			<h1>Confirm user</h1>
			<h3>{search?.search || "Nothing"}</h3>
		</div>
	);
};

export default ConfirmUser;