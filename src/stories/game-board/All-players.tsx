import PlayerDisplay, { PlayerProps } from "./Player-display";

// component that renders a player in the game
type AllPlayersProps = {
    players: Array<PlayerProps>;
};

const AllPlayers = (props: AllPlayersProps) => {

    return (
        props.players.map((player: PlayerProps) => {

            return (
                <PlayerDisplay {...player} />
            );
        })
    )
};

export default AllPlayers;