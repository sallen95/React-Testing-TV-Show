import React from 'react';
import { render, screen } from '@testing-library/react';

import Episodes from './Episodes';

test("Episodes renders correctly", () => {
    render(<Episodes episodes={[]}/>);
})

const episodes = [
    {episode_name:"Episode 1", episode_id:1},
    {episode_name:"Episode 2", episode_id:2}
]

test('rerenders correctly when passing in new episode data', () => {
    const { rerender } = render(<Episodes episodes={[]}/>);
    let episodeObjects = screen.queryAllByTestId('episode');
    expect(episodeObjects).toStrictEqual([]);

    rerender(<Episodes episodes={episodes}/>)
    episodeObjects = screen.queryAllByTestId('episode');
    expect(episodeObjects).toHaveLength(2);
})
