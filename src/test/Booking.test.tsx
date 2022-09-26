import { render } from '@testing-library/react'
import { Booking } from '../components/Booking'

describe('Header Component', () => {
    it('it should render a link to /actions', () => {
        const { getByRole } = render(<Booking />)

        expect(getByRole('link')).toHaveAttribute('href', '/actions')
    })
 
})