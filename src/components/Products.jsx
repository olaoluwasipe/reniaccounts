import React from 'react';
import { BsShieldLockFill, BsFillCartFill, BsFillCreditCardFill } from 'react-icons/bs';

const Products = () => {
  return (
    <div className='container products'>
        <div className="heading mb-8">
            <h2>Other Products To Boost Your Business From Us</h2>
        </div>

        <div className="products-container">
            <a className='product' href="https://renitrust.com" target="_blank">
                <BsShieldLockFill fontSize={40} color='#0052b9' className='mb-6' />
                <h3><b>Reni Trust</b></h3>
                <div className="body mt-3">
                    ReniTrust is an escrow wallet. ReniTrust is a comprehensive solution to the lack of TRUST in Internet transactions in Africa. We aid online retailers in gaining the trust of prospective clients. We go to considerable measures to ensure that our clients' financial transactions are entirely risk-free and secure.
                </div>
            </a>
            <a className='product' href="https://reni.store" target="_blank">
                <BsFillCartFill fontSize={40} color='#780000' className='mb-6' />
                <h3><b>Reni Store</b></h3>
                <div className="body mt-3">
                    Reni Store is an e-commerce platform with a dynamic retail process that carries a vast selection of products, including those for personal care, mobile devices, fashion, and more. The store experience is optimised to provide shoppers with a sense of control and decisiveness. Our escrow system supports the online store, making all transactions risk-free.
                </div>
            </a>
            <div className='product'>
                <BsFillCreditCardFill fontSize={40} color='#237800' className='mb-6' />
                <h3><b>Reni Pay (coming soon)</b></h3>
                <div className="body mt-3">
                    ReniPay is a blockchain based wallet. ReniPay is a comprehensive solution to the lack of TRUST in Internet transactions in Africa. We aid online retailers in gaining the trust of prospective clients. We go to considerable measures to ensure that our clients' financial transactions are entirely risk-free and secure.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
