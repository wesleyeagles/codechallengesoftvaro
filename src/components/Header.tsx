import { BrowserRouter, Link } from 'react-router-dom'
import { Container } from './styled/Container'
import { StyledHeader } from './styled/StyledHeader'
import { GoogleLogin, GoogleLogout } from 'react-google-login'; 
import Badge from '../utils/Badge.svg'
import { useAuth } from '../hooks/useAuth';


export function Header() {

    const { isLogged, onFailure, onLogoutSuccess, onSuccess, userImage} = useAuth()

    return (
        <BrowserRouter>
        <Container>
            <StyledHeader id='header'> 
                <div className='header__left__column'>
                    <div className='badge-logo'>
                        <Link to='/'>
                            <img src={Badge} alt="badge-logo" />
                        </Link>
                    </div>

                    <nav className='navigation'>
                        <Link className='navigation__link' to='/nanny'>
                            <h5>Create Your Nanny Share</h5>
                        </Link>

                        <Link className='navigation__link' to='/shares'>
                            <h5>Browse Shares</h5>
                        </Link>

                        <Link className='navigation__link' to='/story'>
                            <h5>Out Story</h5>
                        </Link>
                    </nav>
                </div>

                <div className='header__right__column'>
                    <button type='button' className='header__btn'>
                        <h5>Become a Nanny Share Host</h5>
                    </button>

                    <div className='header__google__login__btn'>
                    {isLogged?
                    <div className='header__google__loggedIn'> 
                    <div className='header__user__photo'>
                        <img src={userImage} alt="user-photo" />
                    </div>
                    <GoogleLogout
                    clientId={`${process.env.VITE_GOOGLE_CLIENT_ID}`}
                    buttonText='Sign Out' 
                    onLogoutSuccess={onLogoutSuccess}                       
                    />
                    </div>
                    :
                    <GoogleLogin 
                    clientId={`${process.env.VITE_GOOGLE_CLIENT_ID}`} 
                    buttonText="Sign In" 
                    onSuccess={onSuccess} 
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'} 
                    responseType='code,token' 
                    />
                    }
                    </div>
                </div>
            </StyledHeader>
        </Container>
        </BrowserRouter>
    )
}