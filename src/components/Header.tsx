import { Link } from 'react-router-dom'
import { Container } from './styled/Container'
import { StyledHeader } from './styled/StyledHeader'

import Badge from '../utils/Badge.svg'

export function Header() {
    return (
        <Container>
            <StyledHeader>
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

                    <Link className='navigation__link' to='/login'>
                        <h5>Sign In</h5>
                    </Link>
                </div>
            </StyledHeader>
        </Container>
    )
}