import React from 'react'
import './CSS/Footer.css'
function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_left'>
                <h1>E-COMMERCE</h1>
                <div className='footer_desc'>
                    There are many variations of passages of Lorem Ipsum available, but
                                        the majority have suffered alteration in some form, by injected
                                        humour, or randomised words which don’t look even slightly believable.</div>

                <div className='social_container'>
                    <div className='social-icons i-1'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='social-icons i-2'>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className='social-icons i-3'>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='social-icons i-4'>
                        <i className="fa-brands fa-pinterest-p"></i>
                    </div>
                </div>
            </div>

            <div className='footer_center'>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className='footer_right'>
                <h3>Contact</h3>

                <div className='contact_item'>
                    <i className="fa-solid fa-location-dot"></i>
                    622 Dixie Path , South Tobinchester 98336</div>
                <div className='contact_item'>
                    <i className="fa-solid fa-phone"></i>
                    +1 234 56 78</div>
                <div className='contact_item'>
                    <i className="fa-solid fa-envelope"></i>
                    contact@e_commerce.dev</div>

                <img src='https://i.ibb.co/Qfvn4z6/payment.png' alt='nod'/>
            </div>
        </div>

    )
}

export default Footer
