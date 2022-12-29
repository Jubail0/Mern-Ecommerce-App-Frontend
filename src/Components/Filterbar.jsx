import React from 'react'
import './CSS/Filterbar.css'
// import StarRateIcon from '@mui/icons-material/StarRate';
import Slider from '@mui/material/Slider';
import { priceSorted } from '../redux/product';
// import SearchIcon from '@mui/icons-material/Search';


function Filterbar({
    setCategory,
    priceRangeValue,
    setPriceRangeValue,
    priceSort,
    setPriceSort,
    category,
    setClear,
    clear,
    sortedPrice,
    setSearch,
    search,
    subCategory

}) {


    const handleChange = (e) => {

        const {value, checked} = e.target
        if (checked) {
            setCategory(prevState => [
                ...prevState,
                value
            ])
        } else {
            setCategory(category.filter(i => {
                return i !== value
            }))

        }


    }
    const handleSearch =(e)=>{
     const{value}=e.target
     setSearch(value)
    }

    const handlePriceSort = (e) => {
        const {value} = e.target
            setPriceSort(value);
        
        


    }


    const handleRange = (event, newValue) => {
        setPriceRangeValue(newValue);

    };


    const clearFilters = () => {
        setPriceRangeValue([0,0])
        setSearch('')
        setPriceSort('')
        setCategory([])
        setClear(true)
    }

    return (
        <div className='filter_component'>
            
            <h3 >FILTERS</h3>
           
           
            <div className='filter'>
                <h3>Sort by </h3>
                <div className='filter-details'>
                    <select  onChange={handlePriceSort}>
                        <option id='1' value="lowest">Lowest Price</option>
                        <option id='2' value="highest">Highest Price</option>
                    </select>
                </div>
            </div>

            <div className='filter'>
                <h3>Category</h3>
                <div className='filter-details'>
                    {
                    subCategory?.subCategory?.map((cat, index) => <span key={index}>
                        <label htmlFor={
                            index
                        }>
                            {
                            cat.toUpperCase()
                        }</label>
                        <input type='checkbox'
                            checked={
                                clear ? false : null
                            }
                            id={
                                index
                            }
                            value={
                                cat
                            }
                            onChange={handleChange}/>
                    </span>)
                } </div>
            </div>


            {/* <div className='filter'>
                <h3>Customer ratings</h3>
                <div className='filter-details'>
                    <p className='ratingStar'>4
                        <StarRateIcon fontSize='small'/>
                        & above
                        <input type="checkbox"/>
                    </p>
                    <p className='ratingStar'>3
                        <StarRateIcon fontSize='small'/>
                        & above
                        <input type="checkbox"/>
                    </p>
                </div>
            </div> */}

            <div className='filter'>
                <h3>Search</h3>
                <div className='filter-details'>
                    <div className="searching" style={{display:'flex',justifyContent:"center",alignItem:'center',border:'none'}}>
                    <input type="search" style={{width:"100%"}}  value={search}  onChange={handleSearch} placeholder="Search"/>
                    </div>
                
                </div>
            </div>

            <div className='filter'>
                <h3>Price Range</h3>
                <div className='filter-details'>
                    <Slider value={priceRangeValue}
                        onChange={handleRange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={
                            sortedPrice && sortedPrice[sortedPrice.length -1]
                        }/>
                </div>
            </div>
            <div className='filter'>
                <button style={
                        {
                            width: '100%',
                            height: '35px',
                            cursor: 'pointer',
                            border: 'none',
                            backgroundColor: "transparent",
                            fontSize: '15px',
                            fontWeight: 'lighter'
                        }
                    }
                    onClick={clearFilters}>CLEAR FILTERS
                </button>

            </div>

            
        </div>
    )
}

export default Filterbar
