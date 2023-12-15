import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState:
                {
                    counter:
                        { value: 10 },
                },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('test increment', () => {
        componentRender(<Counter />, {
            initialState:
                {
                    counter:
                        { value: 10 },
                },
        });
        const incrementBtn = screen.getByTestId('btn-inc');

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('test decrement', () => {
        componentRender(<Counter />, {
            initialState:
                {
                    counter:
                        { value: 10 },
                },
        });
        const decrementBtn = screen.getByTestId('btn-dec');

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
