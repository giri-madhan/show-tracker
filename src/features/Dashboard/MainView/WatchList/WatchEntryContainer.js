import React, {useState} from 'react'
import WatchEntryCard from './WatchEntryCard'
import { useSelector } from 'react-redux'
import Spinner from '../../../Spinners/Spinner'
import DashHeader from '../../DashHeader/DashHeader'

const EntryContainer = (props) => {
    const watchListItems = useSelector(s => s.wlis.list)
    const [filteredList, setFilteredList] = useState([])
    const [filter, setFilter] = useState('')
    const {setViewDisplay, viewDisplay, mpData, isLoading, wlData} = props

    const setFilterListAndType = (data, filter) => {
        setFilteredList(data)

        let formattedFilter
        if (filter === 'dateasc') {
            formattedFilter = 'Oldest First'
        } 
        else if (filter === 'datedesc') {
            formattedFilter = 'Newest First'
        } else {
            formattedFilter = filter[0].toUpperCase() + filter.substring(1)
        }
        setFilter(formattedFilter)
    }
    
    const getDisplayList = () => {
        if (filteredList.length > 0) {
            return filteredList
        } else if (filteredList.length === 0) {
            return wlData
        }
    }

        return(
            <div className='watch-list-container'>
                <DashHeader 
                    viewDisplay={viewDisplay} 
                    setViewDisplay={setViewDisplay} 
                    filteredList={filteredList} 
                    setFilterList={setFilterListAndType}
                    watchListItems={watchListItems}
                    filter={filter}
                />
                <div className='wli-container'>
                    { getDisplayList() ? getDisplayList().slice(0).reverse().map( wli => (
                        <WatchEntryCard wli={wli} key={wli._id} mpData={mpData} isLoading={isLoading} />  
                    )) : (
                        <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Spinner type='circle' />
                        </div>    
                    )}
                </div>
            </div>
        )
    }
    export default EntryContainer