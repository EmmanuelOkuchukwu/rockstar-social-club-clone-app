import React, { useState, useEffect } from 'react';
import { AuthService } from '../../service/authService';
import { MainFeedSection } from './mainFeedStyles';

function MainFeed() {
    const [userInfo, setUserInfo] = useState(AuthService.getUserInfo());
    return(
        <MainFeedSection></MainFeedSection>
    )
}

export default MainFeed;