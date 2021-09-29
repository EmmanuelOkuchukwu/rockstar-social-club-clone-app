import React, { useState, useEffect } from 'react';
import { AuthService } from '../../service/authService';
import { MainFeedSection } from './mainFeedStyles';
import Navigationbar from '../../components/Navigation';
import Banner from '../../components/Banner';

function MainFeed() {
    const [userInfo, setUserInfo] = useState(AuthService.getUserInfo());
    return(
        <MainFeedSection>
            <Navigationbar />
            <Banner />
        </MainFeedSection>
    )
}

export default MainFeed;
