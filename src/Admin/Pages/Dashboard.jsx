import React from 'react'
import "../css/dashboard.css"
import '../css/mainLayout.css'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import NewUser from '../Components/NewUser'
import TopProducts from '../Components/TopProducts'
import EarningChart from '../Components/earningChart'
import AdminTable from '../Components/Table'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {useSelector,useDispatch} from 'react-redux'
import getDashboardData from '../API/adminDashboards'
import Loading from '../../Components/Loading'
function Dashboard() {
    const dispatch = useDispatch()
    const {dashboard_loading,dasboard_data}= useSelector(state => state.admin)
    const transactionHeaders = ["Transactions","Date","Payment mode","Amount","Status"]

    React.useEffect(()=>{
        getDashboardData(dispatch)
    },[])

    return (
        <div id='main'>
            <Topbar/>
            <div className='main_body'>
                <div className='main_left'>
                    <Sidebar/>
                </div>
                {dashboard_loading?
         <Loading type="rise"/>:
                <div className='main_right'>
               <div className='analysis_container'>
                   <div className='earning_chart'>
                        <h2>SALES</h2>
                        {dasboard_data?.monthlyIncome?.length >0 ?<EarningChart earningData = {dasboard_data?.monthlyIncome}/>:<h3 style={{textAlign:'center'}}>No data yet...</h3>}
                    </div>
                    <div className='reports'>
                        <div className='reports_users'>
                            <h2>LATEST CUSTOMERS</h2>

                            <div className='newUsers'>
                        {dasboard_data?.getNewUsers.length > 0 ?<NewUser newCustomers ={dasboard_data?.getNewUsers}/>:<h3 style={{textAlign:'center'}}>No data yet...</h3>}
                            </div>

                        </div>
                        <div className='reports_topProducts'>
                            <h2>TOP PRODUCTS</h2>
                            <div className='top_Products'>
                               {dasboard_data?.sales ? <TopProducts topProducts = {dasboard_data?.sales}/>:<h3 style={{textAlign:'center'}}>No data yet...</h3>}
                            </div>
                        </div>
                    </div>
                    <div className='transaction'>
                      <div className="transaction_header">
                        <h2>TRANSACTIONS</h2>
                        <p>This is a list of lastest transactions.</p>
                      </div>
                      <div className='transaction_table'>
                       {dasboard_data?.transactions?.length>0? <AdminTable headers={transactionHeaders} dashboard= {true} transitions={dasboard_data?.transactions}/>:<h3 style={{textAlign:'center'}}>No data yet...</h3>}
                      </div>

                    </div>
                    <div className='main_footer'>
                        <div className='main_footer_container'>
                            <span className='copyright'>© 2022 Jubail Mallick, All rights reserved.</span>
                            <div>
                                <span><FacebookIcon/></span>
                                <span><InstagramIcon/></span>
                                <span><TwitterIcon/></span>
                                <span><PinterestIcon/></span>
                            </div>
                        </div>

                    </div>
                      
                    </div>   
                     </div>}
           
                </div>

        </div>
    )
}

export default Dashboard
