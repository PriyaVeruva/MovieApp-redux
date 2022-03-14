export const movieInfo=(formData)=>
{
    return{
        type:'MOVIE_DATA',
        payload:formData
    }
}
//Remove Action
export const deleteInfo=(id)=>
{
    return {
        type:'DELETE',
        payload:id
    }
}
