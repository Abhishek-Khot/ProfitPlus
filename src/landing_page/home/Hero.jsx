import React from 'react';

function Hero() {
    const handleSignupClick = () => {
        window.location.href = 'http://localhost:5173/'; // Redirect to the external signup page
    };

    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src='/assets/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button 
                    className='p-2 btn btn-primary fs-5 mb-5' 
                    style={{width:"20%", margin:"0 auto"}}
                    onClick={handleSignupClick}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
