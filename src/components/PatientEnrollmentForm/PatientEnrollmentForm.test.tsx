import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PatientEnrollmentForm from './PatientEnrollmentForm';

beforeEach(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

describe('<PatientEnrollmentForm />', () => {
    it('renders the form', async () => {
        const handleSubmit = jest.fn();

        render(<PatientEnrollmentForm onFormSubmit={handleSubmit} formSubmitted={false} />);

        const patientEnrollmentForm = await screen.findByTestId('patient-enrollment-form');
        // expect(patientEnrollmentForm).toBeInTheDocument();
        await waitFor(() => expect(patientEnrollmentForm).toBeInTheDocument());
    });
    it('prevents progression on missing required fields', async () => {
        const handleSubmit = jest.fn();

        render(<PatientEnrollmentForm onFormSubmit={handleSubmit} formSubmitted={false} />);

        act(() => {
            userEvent.click(screen.getByRole('button', { name: /next/i }));
        });
        await waitFor(() => expect(screen.getByLabelText(/first name/i)).toBeInTheDocument());
    });
});
