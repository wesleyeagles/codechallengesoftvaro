import { BrowserRouter, Link } from "react-router-dom";
import { StyledFooter } from "./styled/StyledFooter";

import HapuLogo from '../utils/Logo.svg';
import FacebookIcon from '../utils/Facebook.svg';
import TwitterIcon from '../utils/Twitter.svg';
import InstagramIcon from '../utils/Instagram.svg';

export function Footer() {
    return (
        <BrowserRouter>
        <StyledFooter>
            <div className="footer__box">
                <div className="footer__left__column">
                    <Link to='/'>
                        <img src={HapuLogo} alt='Hapu Logo' />
                    </Link>
                </div>

                <div className="footer__center_column">
                    <nav className="footer__navigation">
                        <Link className='footer__link' to='/share'>
						    <h5>Share Your Nanny</h5>
					    </Link>
					    <Link className='footer__link' to='/story'>
						    <h5>Our Story</h5>
					    </Link>
					    <Link className='footer__link' to='/blog'>
						    <h5>Blog</h5>
					    </Link>
					    <Link className='footer__link' to='/terms'>
						    <h5>Terms & Privacity</h5>
					    </Link>
                    </nav>
                </div>

                <div className="footer__social-media">
                    <Link className="footer__social-media__single" to='/'>
						<img src={FacebookIcon} alt='Facebook' />
					</Link>
					<Link className="footer__social-media__single" to='/'>
						<img src={TwitterIcon} alt='Twitter' />
					</Link>
					<Link className="footer__social-media__single" to='/'>
						<img src={InstagramIcon} alt='Instagram' />
					</Link>
                </div>
            </div>
            <p className='divider' />
            <h5 className='footer__copyright'>
				Copyright © 2017 Hapu PTY Limited All rights reserved
			</h5>
        </StyledFooter>
        </BrowserRouter>
    )
}