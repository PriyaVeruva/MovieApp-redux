import React from "react";
import {useSelector} from 'react-redux'
const MovieStats=(props)=>
{
    const movies  = useSelector((state)=>{
        return(
            state.movies
        )
    })
    const sortedArray = movies.map(element=>element.Rating)
    console.log(sortedArray)
    const result = Math.min(...sortedArray)
    console.log('minimum',result)
    // const result = sortedArray.sort((a,b)=>{
    //     return a - b // 
    // }) //  ascending order 
     const rank = movies.filter(ele=> ele.Rating === result)
     console.log('expacted array',rank)
     

    return(
        <div className = 'row' >
            <h2 className  = 'display-3' style={{color:"GrayText"}}>Movie stats</h2>
            <div className="card w-100">
                <div className="card-body">
                    <h3 className="card-title">Totalmovies - {movies.length}</h3>
                    <h3 className="card-title">Top Movie - {rank.length}</h3>
                    <div>
                            <ul>
                                {rank.map((ele,i)=>{
                                    return (
                                        <li key={i}><p>{ele.MovieName}</p></li>
                                    )
                                })}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default MovieStats