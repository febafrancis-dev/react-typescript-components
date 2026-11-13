
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './Modal'

describe('Modal Component', () => {
    it('does not render when closed', () => {
        render(
            <Modal isOpen={false} onClose={() => { }} title="Confirm">
                Are you sure?
            </Modal>
        )

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('renders when open', () => {
        render(
            <Modal isOpen onClose={() => { }} title="Confirm">
                Are you sure?
            </Modal>
        )

        expect(screen.getByRole('dialog')).toBeInTheDocument()
        expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    })

    it('displays the title', () => {
        render(
            <Modal isOpen onClose={() => { }} title="Delete item">
                Confirm deletion
            </Modal>
        )

        expect(screen.getByRole('heading', { name: 'Delete item' }))
            .toBeInTheDocument()
    })

    it('calls onClose when close button is clicked', async () => {
        const user = userEvent.setup()
        const handleClose = vi.fn()

        render(
            <Modal isOpen onClose={handleClose} title="Confirm">
                Content
            </Modal>
        )

        await user.click(screen.getByRole('button', { name: 'Close modal' }))

        expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('calls onClose when backdrop is clicked', async () => {
        const user = userEvent.setup()
        const handleClose = vi.fn()

        const { container } = render(
            <Modal isOpen onClose={handleClose} title="Confirm">
                Content
            </Modal>
        )

        await user.click(container.firstElementChild!)
        expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('does not close when modal content is clicked', async () => {
        const user = userEvent.setup()
        const handleClose = vi.fn()

        render(
            <Modal isOpen onClose={handleClose} title="Confirm">
                Content
            </Modal>
        )

        await user.click(screen.getByText('Content'))

        expect(handleClose).not.toHaveBeenCalled()
    })
})
