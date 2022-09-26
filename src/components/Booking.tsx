import { StyledBooking } from "./styled/StyledBooking";

import ProfileImage from '../utils/ProfileImage.svg'
import { Link } from "react-router-dom";

export function Booking() {
    return (
        <StyledBooking>
            <img className="booking__profile__image" src={ProfileImage} alt="profile-image" />

            <Link className="booking__action__link" to='/actions'>
                <span>
                    Sarah’s day care available now in North Sydney
                </span>
            </Link>

            <h4>
                Wednesday, Thursday, Friday - 7:30 - 5:30
            </h4>
        </StyledBooking>
    )
}