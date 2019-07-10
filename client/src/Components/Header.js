import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return ( <div className='header'>
<Link to='/'> Home</Link>
<Link to='/leaderboard'> LeaderBoard</Link>
<Link to='/addmember'>add Member</Link>

    </div> );
}
 
export default Header;