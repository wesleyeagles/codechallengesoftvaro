import { render } from '@testing-library/react'
import { Share } from '../components/Share'

describe('Header Component', () => {
    it('it should render a h2', () => {
        const { getByText } = render(<Share />)

        expect(getByText('Share your home, nanny and costs')).toHaveAttribute('role', 'h2')
    })

    it('it should render links to /tribe and /start', () => {
        const { getByText } = render(<Share />)

        expect(getByText('Hapu means tribe').closest('a')).toHaveAttribute('href', '/tribe')
        expect(getByText('Ready to get started?').closest('a')).toHaveAttribute('href', '/start')
    })

    it('it should render a image', () => {
        const { getByAltText } = render(<Share />)

        expect(getByAltText('Hapu App')).toBeInTheDocument()
    })
 
})