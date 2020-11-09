import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow.js');

test('fetches and renders episode data', async () => {
    mockFetchShow.mockResolvedValueOnce({
        data:[
            {episode_name:"Episode 1", episode_id:1},
            {episode_name:"Episode 2", episode_id:2}
        ]
    });

    render(<App/>);

    // const dropdown = screen.getByText(/select a season/i);
    // userEvent.click(dropdown);
    // const seasonOne = screen.getByText(/season 1/i);
    // userEvent.click(seasonOne);

    await waitFor(() => {
        const dropdown = screen.getByText(/select a season/i);
        userEvent.click(dropdown);
        const seasonOne = screen.getByText(/season 1/i);
        userEvent.click(seasonOne);

        const episodes = screen.getAllByTestId('episode');
        expect(episodes).toHaveLength(2);
    })
})


