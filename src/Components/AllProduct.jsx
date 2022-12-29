import React from 'react'
import './CSS/AllProduct.css'
import Filterbar from './Filterbar'
import AppPagination from './AppPagination'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts} from '../API/getAllProducts.js'
import {useLocation} from 'react-router-dom'
import {pagination} from '../redux/product'
import Card from '../Components/Card'
import ResultBar from '../Components/resultBar'
import { CircularProgress } from '@mui/material'

function AllProduct() {
    window.scroll(0,0)
    const {
        product1,
        isFetching,
        totalPages,
        pageNumber,
        sortedPrice,
        sub_categories
        
    } = useSelector(state => state.product)

    const [category, setCategory] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [clear, setClear] = React.useState(false)
    const [priceRangeValue, setPriceRangeValue] = React.useState([0, 0]);
    const [priceSort, setPriceSort] = React.useState('')
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const categoryName = pathname.slice(10)




    React.useEffect(() => {
     fetchProducts(categoryName, dispatch, pageNumber, category, priceRangeValue, priceSort, search) 
     setClear(false)
     }, [
        categoryName,
        pageNumber,
        category,
        priceRangeValue,
        priceSort,
        search
    ])

    React.useEffect(() => {
        dispatch(pagination(1))
    }, [categoryName])

    return (
        <> { 
            
            
            <section id='allproduct'>
                   <ResultBar />
                <div className='allProduct-wrapper'>
                   
                    <div className='filter-sidebar'>
                        <Filterbar category={category}
                            setCategory={setCategory}
                            priceRangeValue={priceRangeValue}
                            setPriceRangeValue={setPriceRangeValue}
                            setPriceSort={setPriceSort}
                            clear={clear}
                            setClear={setClear}
                            sortedPrice={sortedPrice}
                            search={search}
                            setSearch={setSearch}
                            subCategory={sub_categories?.[0]}/>
                    </div>
                    
                    <div className='product-container'>
                    
                      <div>
                        <h3>RESULTS</h3>
                        <span>Price and other details may vary based on product size and colour.</span>
                        </div>
                        {/* <Products product1={product1} isFetching={isFetching}/> */}
                  <div className='product'>

                            {
                         
                       !isFetching ?  product1?.length > 0? product1.map((items, index) => <Card width={220} height={100} id={
                                    items._id
                                }
                                key={index}
                                price={
                                    items.price
                                }
                                btn="View details"
                                category={
                                    items.category
                                }
                                name={
                                    items.name
                                }
                                img={
                                    items.img.imgeUrl
                                }/>): <h1>No Products found</h1> :<CircularProgress/>
                        } </div>

                        <div className="pagination"
                            style={
                                {padding: "5px"}
                        }>
                        
                         <AppPagination totalPages={totalPages}
                                page={pageNumber}/>
                         </div>
                    </div> 
                </div>
            </section>
            }
            </>
    )
}

export default AllProduct
