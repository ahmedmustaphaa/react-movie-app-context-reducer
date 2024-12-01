

export const initialstate={
    watchlist:[],
    watched:[]
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
        case 'ADD_TO_WATCHED':
            return{
                ...state,
                watchlist:state.watchlist.filter((movie)=>movie.imdbID!==action.payload.imdbID),

                watched:[...state.watched,action.payload]

            }    
        case "REMOVE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist:state.watchlist.filter((movie)=>movie.imdbID!=action.payload),
               
                  
            }    
        case "REMOVE_FROM_WATCHED":
            return{
                ...state,
                watched:state.watched.filter((movie)=>movie.imdbID!=action.payload),
               
                  
            }    
        case "MOVE_TO_WATCHLIST":
            return{
                ...state,
                watched:state.watched.filter((movie)=>movie.imdbID!==action.payload.imdbID),

                watchlist:[...state.watchlist,action.payload]

            }    
       
        // Add other cases as needed
        default:
            return state;
    }
};
