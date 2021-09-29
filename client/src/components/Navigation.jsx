import React from 'react';
import styled from 'styled-components';
import { AuthService } from '../service/authService';
import { useHistory } from 'react-router-dom';
import RockstarScLogo from '../assets/sc-logo.jpg';
import JT from '../assets/Josiah-Tralawny-icon.png'

const Navigationbar = () => {
    const history = useHistory();
    const handleSignout = (evt) => {
        evt.preventDefault();
        AuthService.onLogout()
        history.push('/');
    }
    return(
        <NavbarContainer>
            <div className="wrapper">
                <ul>
                    <img src={RockstarScLogo} height="50" alt="sc-logo"/>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Crews</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">News</a></li>
                </ul>
                <div className="profile-min-section">
                    <button className="download-btn">Download Launcher</button>
                    <a className="bell-icon" href="#"><i className="far fa-bell" /></a>
                    <a href="#" onClick={handleSignout}><img className="img-profile" src={JT} alt="profile-img" height="30"/></a>
                </div>
            </div>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    //margin: 0 auto;
    //max-width: 1420px;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    margin: 15px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .wrapper {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .nav-title {
    color: #fff;
  }
  .profile-min-section {
    display: flex;
    align-items: center;
    margin: 10px;
    .download-btn {
      margin-right: 25px;
      background-color: #fcaf17;
      height: 50px;
      border: none;
      &:hover {
        color: white;
      }
    }
    .bell-icon {
      margin-left: 5px;
    }
    .img-profile {
      margin-left: 15px;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      flex-direction: column;
    }
    .download-btn {
      font-size: 10px;
      height: 30px;
      width: 50%;
    }
  }
`

export default Navigationbar;
