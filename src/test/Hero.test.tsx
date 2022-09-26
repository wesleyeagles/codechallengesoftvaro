import { getByAltText, render } from '@testing-library/react'
import { Hero } from '../components/Hero'

describe('Header Component', () => {
    it('it should render a list of texts', () => {
        const { getByText } = render(<Hero />)

        expect(getByText('Easily create or join a local nanny share with Hapu')).toHaveAttribute('role', 'h1')
        expect(getByText('Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.')).toHaveAttribute('role', 'h2')
    })

    it('it should render a image', () => {
        const {getByAltText} = render(<Hero />)

        expect(getByAltText("Hapu Console")).toBeInTheDocument()
    })

    
})