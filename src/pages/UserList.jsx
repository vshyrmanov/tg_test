import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
	const [users, setUsers] = useState([]);

	const fetchMovieHandler = useCallback(async () => {
		// setIsLoading(true);
		// setError(null);
		try {
			const response = await fetch('http://localhost:4000/register/getAllUsers');
			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const data = await response.json()
			console.log(data)
			setUsers(data)
		} catch (error) {
			// setError(error.message);
		}
		// setIsLoading(false);
	}, [])

	useEffect(() => {
		fetchMovieHandler()
	}, [fetchMovieHandler])

	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			gap: '10px'
		}}>
			{users?.map(user =>
				<div key={user._id} style={{
					justifyContent: 'flex-start',
					border: '1px solid #bdbdbd',
					width: '100%',
					borderRadius: '12px',
					padding: '5px'
				}}>
				<span>{user.username}</span>
					<div
					 style={{
						 display: 'flex',
						 alignItems: 'center',
						 justifyContent: 'space-between',
					 }}
					>
						<span>
							{`${user.rank} ${user.firstName} ${user.secondName} ${user.thirdName}`}
						</span>
						<button>Модератор</button>
					</div>
				</div>)}
			<Link to="/admin">
				<button>Назад</button>
			</Link>
		</div>
	);
};

export default UserList;