import playersData from './playersData'

export default (state = playersData, action) => {

  switch (action.type) {
    case "ADD_TITULAR":
      return {
        ...state,
        titulars: state.titulars.concat(action.player),
        players: state.players.filter(player => player.id !== action.player.id),
        scrubs: state.scrubs.filter(player => player.id !== action.player.id)
      };

    case "ADD_SCRUB":
      return {
        ...state,
        scrubs: state.scrubs.concat(action.player),
        players: state.players.filter(player => player.id !== action.player.id),
        titulars: state.titulars.filter(
          player => player.id !== action.player.id
        )
      };
    case "GIVE_BACK":
      return {
        ...state,
        players: state.players.concat(action.player),
        titulars: state.titulars.filter(
          player => player.id !== action.player.id
        ),
        scrubs: state.scrubs.filter(player => player.id !== action.player.id)
      };

    default:
      break;
  }

  return state;
};
