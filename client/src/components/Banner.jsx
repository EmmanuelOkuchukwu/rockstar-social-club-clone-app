import React from 'react';
import styled from 'styled-components';
import { AuthService } from '../service/authService';
import { useHistory } from 'react-router-dom';
import RockstarScLogo from '../assets/sc-logo.jpg';
import JT from '../assets/Josiah-Tralawny-icon.png'

const Banner = () => {
    const history = useHistory();
    return(
        <BannerContainer>
            <div className="banner-wrapper">
                <div className="general-info">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </BannerContainer>
    )
}

const BannerContainer = styled.nav`
  width: 100%;
  height: 300px;
  background-color: #fcaf17;
  .banner-wrapper {
    max-width: 1420px;
    margin: 0 auto;
  }
`

export default Banner;
