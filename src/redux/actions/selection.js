export const addTitular = (player, dispatch) => {
         dispatch({
           type: "ADD_TITULAR",
           player
         });
       };

export const addScrub = (player, dispatch) => {
         dispatch({
           type: "ADD_SCRUB",
           player
         });
       };

export const giveBack = (player, dispatch) => {
         dispatch({
           type: "GIVE_BACK",
           player
         });
       };