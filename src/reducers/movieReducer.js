const movieData =  []
const movieReducer = (state = movieData, action) => {
    switch(action.type)
    {
        case 'MOVIE_DATA':
            {
                return [...state,{...action.payload}]
            }
            case 'DELETE':
                {
                 return state.filter(ele=>
                    {
                        if(ele.id!==action.payload)
                        {
                            return {}
                        }
                    })
                }
                
           
                
            default:
                {
                    return [...state]
                }
    }
}
export default movieReducer