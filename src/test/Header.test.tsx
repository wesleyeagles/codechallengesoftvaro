import { getByAltText, render } from '@testing-library/react'
import  userEvent from '@testing-library/user-event'
import { Header } from '../components/Header'

describe('Header Component', () => {
    it('it should render a list of texts', () => {
        const { getByText } = render(<Header />)

        expect(getByText('Create Your Nanny Share')).toBeInTheDocument()
        expect(getByText('Browse Shares')).toBeInTheDocument()
        expect(getByText('Out Story')).toBeInTheDocument()
    })

    it('it should render a button with role signin, after pressing it should render a button with role signout and the user image', async () => {
        const { getByText, getByAltText } = render(<Header />)

        expect(getByText('Sign In')).toBeInTheDocument()

        const signButton = getByText('Sign In')
        
        await userEvent.click(signButton)

        setTimeout(() => {
            expect(getByText('Sign Out')).toBeInTheDocument()
            expect(getByAltText('user-photo')).toBeInTheDocument()
        }, 2000)
        
    })
})