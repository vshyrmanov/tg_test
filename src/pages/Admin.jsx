import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			gap: '10px'
		}}>

				<Link to='/userList'>
					<button>
					Додати адміна
					</button>
				</Link>
			<button>Додати сервіс</button>
		</div>
	);
};

export default Admin;