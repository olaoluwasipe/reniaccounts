import React, {useState, useEffect} from 'react';
import { pricing } from '../utils/data';

const Pricing = () => {

    const [pricingChange, setPricingChange] = useState(1)
    const [checked, setChecked] = useState(false)
    const ifPriceChange = (event) => {
        setChecked(event.target.checked)
        if(event.target.checked){
            setPricingChange(11);
        }else{
            setPricingChange(1);
        }
    }
  return (
    <div className='pricing-section container'>
        <div className="heading mb-8">
            <h2>Find a Plan That's Right For You</h2>
        </div>
        <div className="checkbox-wrapper-9">
            <input onChange={ifPriceChange} checked={checked} className="tgl tgl-flat" id="cb4-9" type="checkbox"/>
            <label className="tgl-btn" htmlFor="cb4-9"></label>
        </div>
        <p className='mt-5'>Get one month free when you choose an Annual plan</p>
        
        <div className="grid">
            
            {pricing?.map((price, i) => (
                <div key={i} className="card-border">
                    <div className="card">
                        <h2 className="card_title">{price.name}</h2>
                        <p className="pricing">{price.price == 0 ? (`Free`) : `₦`+(parseInt(price.price) * pricingChange).toLocaleString()}<span className="small">{pricingChange == 11 ? '/per year' : '/per month'}</span></p>
                        <hr/>
                        <ul className="features">
                            {price.features?.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <a href="#" className="cta_btn">Get Started</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
