import { render, screen } from '@testing-library/react'
import Page from '@/pages/index'

describe('Home', () => {
  xit('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
