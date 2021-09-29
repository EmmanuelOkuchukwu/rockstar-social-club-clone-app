import React, { useState, useEffect } from 'react';
import { AuthService } from '../../service/authService';

function MainFeed() {
    const [userInfo, setUserInfo] = useState(AuthService.getUserInfo());
    return(
        <div></div>
    )
}

export default MainFeed;