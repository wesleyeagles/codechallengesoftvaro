import { StyledBox } from "./styled/StyledBox";
import { StyledHero } from "./styled/StyledHero";

import ImgHero from '../images/ImageHeader.png'

export function Hero() {
    return (
        <StyledHero>
            <StyledBox>
                <div className="hero__left__column">
                    <h1 role='h1'>
                        Easily create or join a local nanny share with Hapu
                    </h1>

                    <h2 role='h2'>
                        Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, 
                        affordable solutions in childcare.
                    </h2>
                </div>

                <div className="hero__right__column">
                    <img src={ImgHero} alt="Hapu Console" />
                </div>
            </StyledBox>
        </StyledHero>
    )
}