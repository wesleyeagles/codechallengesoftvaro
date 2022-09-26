import { render } from '@testing-library/react'
import { Payments } from '../components/Payments'

describe('Header Component', () => {
    it('it should render a h2', () => {
        const { getByText } = render(<Payments />)

        expect(getByText('Shared payments made simple')).toHaveAttribute('role', 'h2')
    })

    it('it should render links to /bridget', () => {
        const { getByText } = render(<Payments />)

        expect(getByText('Read how Bridget’s share (without Hapu) ended over $15').closest('a')).toHaveAttribute('href', '/bridget')
    })

    it('it should render a image', () => {
        const { getByAltText } = render(<Payments />)

        expect(getByAltText('Payments share console')).toBeInTheDocument()
    })
 
})