import type { Meta, StoryObj } from '@storybook/react';
import AllPlayers from './All-players';
import { PlayerProps } from './Player-display';

const meta: Meta<typeof AllPlayers> = {
    title: 'AllPlayers',
    component: AllPlayers,
}

export default meta;

type AllPlayersStory = StoryObj<typeof AllPlayers>;

const allPlayerData = new Array<PlayerProps>();
allPlayerData.push({
    name: 'Player 1',
    hasFoundPlayer: true,
    isReady: false,
    color: "red",
    score: 3,
});

export const Default: AllPlayersStory = {
    args: {
        players: allPlayerData
    }
};