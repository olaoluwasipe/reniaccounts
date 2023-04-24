import React from 'react';
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled } from 'react-icons/tb';

const Features = () => {
  return (
    <div className="features">
        <div className='container'>
            <div className="feature feature-background">
                <div className="feature-content">
                    <div className="title">
                        <TbSquareRoundedNumber1Filled />
                        <h2>Keep Track of Inventory.</h2>
                        <a href="" className="btn primary">Get Started</a>
                    </div>
                    <p className="body">
                        Reni accounting helps firms manage inventory by identifying what, how much, and when to order. It also tracks trends and alerts of shortages while providing expiration dates and performance reports for informed decision-making. Never run out of stock with Reni!
                    </p>
                </div>
            </div>
            <div className="feature feature-background">
                <div className="feature-content">
                    <div className="title">
                        <TbSquareRoundedNumber2Filled />
                        <h2>Great Financial Management.</h2>
                        <a href="" className="btn primary">Get Started</a>
                    </div>
                    <p className="body">
                        Reni accounting helps manage business accounting by tracking sales and expenses for financial overview. It allows invoicing and managing key financial indicators for operations and profitability.
                    </p>
                </div>
            </div>
            <div className="feature feature-background">
                <div className="feature-content">
                    <div className="title">
                        <TbSquareRoundedNumber3Filled />
                        <h2>Efficient Financial Reporting.</h2>
                        <a href="" className="btn primary">Get Started</a>
                    </div>
                    <p className="body">
                        Reni accounting offers a detailed report of financial transactions for any period, removing the need for calculating profit, cost of goods, and other accounting indicators. The reports cover finances, product and retail performance, and overall business performance.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
