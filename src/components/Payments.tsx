import { BrowserRouter, Link } from "react-router-dom";
import { StyledBox } from "./styled/StyledBox";
import { StyledPayments } from "./styled/StyledPayments";

import ImgSec3 from '../images/ImageSection3.png'
import { Container } from "./styled/Container";

export function Payments() {
    return (
        <BrowserRouter>
        <StyledPayments>
            <Container>
                <div className="payments__wrapper">
                <div className="payments__left__column">
                    <img src={ImgSec3} alt="Payments share console" />
                </div>

                <div  className="payments__right__column">
                    <h2 role='h2'>
                        Shared payments made simple
                    </h2>

                    <p>
                        Sometimes it’s hard enough just sharing a restaurant
						bill. Try sharing that bill week in, week out and
						you might encounter more than a few snares. But not
						with Hapu. Simply set your rates and our automated
						payment system takes care of the rest. You need
						never talk money or who owes what.
                    </p>
                    
                    <Link className="payments__link" to='/bridget'>
                        <span>
							Read how Bridget’s share (without Hapu) ended
							over $15
						</span>
                    </Link>
                </div>
                <span className='divider' />
                </div>
                </Container>
        </StyledPayments>
        </BrowserRouter>
    )
}