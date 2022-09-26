import { Link } from "react-router-dom";
import { StyledBox } from "./styled/StyledBox";
import { StyledShare } from "./styled/StyledShare";

import ImgSec1 from '../images/ImageSection1.png'

export function Share() {
    return (
        <StyledShare>
            <StyledBox>
                <div className="share__left__column">
                    <h2>
						Share your home,
						nanny and costs
					</h2>

                    <span>
                        You have a fantastic home, a fantastic nanny and
						wouldn’t cutting your costs in half be, well,
						fantastic?! If only it was easy to connect with
						other parents to share your costs? Well now it is,
						with Hapu.
						<Link className='share__link' to='/tribe'>
							<span>Hapu means tribe </span>
						</Link>
						and it’s our foundational 3 tribal principles that
						empowers you to create and manage your own tribe. A
						tribe that together has the power to create new
						affordable solutions in childcare that work for you
						and your community.
                    </span>

                    <Link className='share__link' to='/start'>
						<span>Ready to get started?</span>
					</Link>
                </div>

                <div className="share__right__column">
                    <img src={ImgSec1} alt="Hapu's App" />
                </div>
            </StyledBox>
        </StyledShare>
    )
}