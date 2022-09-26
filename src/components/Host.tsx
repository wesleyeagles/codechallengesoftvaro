import { Link } from "react-router-dom";
import { StyledHost } from "./styled/StyledHost";

import CalendarIcon from '../utils/CalendarIcon.svg';

export function Host() {
    return (
        <StyledHost>
            <h2>
                Become a nanny share host
            </h2>
            <p>
                Takes less than 5 minutes to get started
            </p>
            <Link className='host__btn__link' to='/login'>
				<button type='button' className='host__btn'>
					<img
						src={CalendarIcon}
						alt='Nanny Share Calendar Button'
					/>
                    <div>
					<span className='host__btn__maintext'>
						Create your nanny share
					</span>
					<span className='host__btn_subtext'>
						Takes less than 5 minutes
					</span>
                    </div>
				</button>
			</Link>

            <Link to='/browse'>
				<span className='host__link'>
					Or browse local nanny-shares
				</span>
			</Link>
        </StyledHost>
    )
}