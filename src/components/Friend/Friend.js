import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

const Friend = props => {
    const {id, name, email} = props.friend;
    const navigate = useNavigate();
    const handleclick = friendId => {
        const url = `/friend/${friendId}`;
        navigate(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <div>
                    <h4>show detail of {id}</h4>
                    <p>Click me</p>
                </div>
            </Link>
            <button onClick={()=>handleclick(id)}>Click me</button>
        </div>
    );
};

export default Friend;