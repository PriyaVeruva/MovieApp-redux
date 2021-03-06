import React, { useState } from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import Moviecards from './MovieCards'

const MovieList = (props) => {
    const optionList = ["A-Z", "Z-A", "rating"]

    const [search, setSearch] = useState('')
    const [sortList, setSortList] = useState('')
    const [toggle, setToggle] = useState(false)
    const data = useSelector((state) => {
        return state.movies
    })

    const handleSearch = (e) => {
        const input = e.target.name
        if (input === "search") {
            setSearch(e.target.value)
        } else if (input === "sort") {
            setSortList(e.target.value)
            setToggle(true)
        }
    }
    //search 
    const searchBar = () => {
        const result = data.filter(ele => {
            return ele.MovieName.toLowerCase().includes(search.toLowerCase()) || ele.Rating.toString().includes(search)
        })
        return result
    }
    //sort
    const handleSort = () => {
        let result
        if (sortList === "A-Z") {
            result = _.sortBy(data, ["MovieName"])
            return result
        }
        else if (sortList === "Z-A") {
            result = _.sortBy(data, ["MovieName"]).reverse()
            return result
        }

        else if (sortList === "rating") {
            result = _.sortBy(data, ["Rating"])
            return result
        } else if (sortList === "") {
            return searchBar()
        }
    }
    return (
        <div className="row mb-3">
            <div className="col-md-8">
                <input type='text' value={search} className="form-control" onChange={handleSearch}
                    placeholder='search either by moviename or rating' name="search" style={{ width: '400px' }} /> <br />
            </div>
            <div className="col-md-4">
                <select className="form-select" value={sortList} name='sort' onChange={handleSearch}>
                    <option value="">Order By</option>
                    {optionList.map((ele, i) => {
                        return <option key={i} value={ele}>{ele}</option>
                    })}
                </select>
            </div>

            {
                toggle ? (
                    handleSort().map((ele, i) => {
                        return (<Moviecards key={i} {...ele} />)
                    })
                ) : (
                    searchBar().map((ele, i) => {
                        return (
                            <Moviecards key={i} {...ele} />
                        )
                    })
                )
            }

        </div>
    )
}
export default MovieList