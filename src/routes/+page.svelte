<script>
    let address = "0x579174AE0e882607Db551E0d0e3B4F89D6E98EEf"


    function copy() {
        const elem = document.createElement('textarea')
        elem.value = address
        document.body.appendChild(elem)
        elem.select()
        document.execCommand('copy')
        document.body.removeChild(elem)
        alert("Address Copied")
    }
</script>

<svelte:head>
	<title>AiBitrum</title>
	<meta name="description" content="AiBitrum is leveraging neural network models, trained with financial data from both the crypto and the regular finance industry, to develop a variety of tools for traders and provide extensive market insights." />
</svelte:head>

<section class="top">
    <div class="top-content-cont">
        <div class="main-container">
            <h1>A<span style="color: #21e1fd;">i</span>Bitrum</h1>
            <p>AI trading solutions</p>
            <div class="wrap">
                <button class="button">Buy $AIB</button>
            </div>

            <!-- <div class="animation">
                <img src="anim.png" alt="Animated Logo">
            </div> -->
        </div>
    
        <div class="side-container">
            <img class="i1" src="s1.png" alt="Icon">
            <div>
                <p>Chart Analysis &</p>
                <p>Trading Tools Powered by AI</p>
            </div>
        </div>
    </div>
</section>

<section id="Features" class="sec2">
    <div class="sec-cont">
        <h1 class="sec-title">Our Features</h1>
        <p class="sec-sub-title">Details to our services</p>

        <div class="features-cont">

            <div class="feature">
                <div class="feat-img-cont">
                    <img src="structure.png" alt="Model">
                </div>
                <h1>Trained Model</h1>
                <p>Neuronal models trained with thousands of chart data and market analysis to predict future trends and provide valuable insights</p>
            </div>

            <div class="feature">
                <div class="feat-img-cont">
                    <img src="analytics.png" alt="Portfolio">
                </div>
                <h1>Portfolio Advisor</h1>
                <p>Make your portfolio decisions with the help of AI-Market analysis and trend recognition from previous cycles</p>
            </div>

            <div class="feature">
                <div class="feat-img-cont">
                    <img src="data-analysis.png" alt="Analysis">
                </div>
                <h1>Market Statistics</h1>
                <p>Get the newest market statistics from various fields to help you make more informative decisions when interacting with the market</p>
            </div>

            <div class="feature">
                <div class="feat-img-cont">
                    <img src="growth-chart.png" alt="Growth">
                </div>
                <h1>Trend Indicator</h1>
                <p>Become aware of trends before they emerge thanks to or data driven analysis algorithms based on historic and recent market data</p>
            </div>

            <div class="feature">
                <div class="feat-img-cont">
                    <img src="color-balance.png" alt="Traders">
                </div>
                <h1>Trading Tools</h1>
                <p>Our tools are build from traders for traders, and we are in the process of developing a series of trading tools for our future platform</p>
            </div>

            <div class="feature">
                <div class="feat-img-cont">
                    <img src="report.png" alt="Reports">
                </div>
                <h1>Chart Reports</h1>
                <p>Our trained models can give chart reports for various stocks and tokens based on its past performance and algorithmic trend indication</p>
            </div>
        </div>

    </div>
</section>

<section id="Token" class="sec3">
    <div class="sec-cont">
        <h1 class="sec-title">The $AIB Token</h1>
        <p class="sec-sub-title">Tokenomics and more</p>

        <div class="contract-address-container">
            <div>
                <img src="332.png" alt="Logo">
                <p> Contract Address:</p>
            </div>
            <span on:click="{copy}" on:keypress="{copy}" class="contract-address">{address}</span>
        </div>

        <div class="sec3-info2">
            <div>
                <h1>Network</h1>
                <p>Arbitrum</p>
            </div>

            <div>
                <h1>Total Supply</h1>
                <p>1,000,000</p>
            </div>

            <div>
                <h1>Buy/Sell Fees</h1>
                <p>0%/0%</p>
            </div>
        </div>

        <div class="sec3-info1">
            <div>
                <h1>Token Distribution</h1>
                <p>
                    15% of the token supply is distributed amongst the team to ensure development and launching our AI-tools in the future.
                    85% is allocated to the liquidity pool and will without any buy or sell fees, so holders can freely trade.
                </p>
            </div>
            <img src="piechart2.png" alt="Pie Chart">
        </div>
    </div>
</section>

<section id="Market" class="sec4">
    <div class="sec-cont">
        <h1 class="sec-title">Our Market Model</h1>
        <p class="sec-sub-title">What we offer you</p>

        <div class="sec4-info">
            <p>With our tools you can identify key opportunities and threats, and make data-driven decisions that can drive growth and profitability.</p>
            <br>
            <p>Receive real-time insights into market trends, consumer behavior, and volume activity.</p>
        </div>

        <div class="sec4-info2">
            <div>
                <h1>Automated Analysis</h1>
                <p>
                    Automatically collect and analyze vast amounts of data from a variety of sources, 
                    such as social media, news articles, and financial reports. This can help businesses stay up-to-date on the latest trends and developments in their industry.
                </p>
            </div>
            <div>
                <h1>Predictive Analytics</h1>
                <p>
                    Use historical data and machine learning algorithms to predict future trends and outcomes. 
                    This can help you make proactive decisions and stay ahead of the competition.
                </p>
            </div>
            <div>
                <h1>Personalized Insights</h1>
                <p>
                    Our AI-powered market analysis tools can provide personalized insights based on a user's specific industry, market, or business. 
                    This can help you tailor your strategies to your unique needs and goals.
                </p>
            </div>
        </div>

        <hr>

        <div class="sec4-info2">
            <div>
                <h1>Better Decision Making</h1>
                <p>
                    Make informed and data-driven decisions with real-time insights and predictive analytics. 
                    This can reduce the risk of making decisions based on incomplete or inaccurate information, leading to better outcomes and improved profitability. 
                </p>
            </div>
            <div>
                <h1>Improved Productivity</h1>
                <p>
                    By automating data collection and analysis, AI-powered market analysis tools can help you save time and resources. 
                    This can free you up to focus on other important tasks and projects, improving overall productivity and efficiency.
                </p>
            </div>
            <div>
                <h1>Better Risk Management</h1>
                <p>
                    Our tools can help you identify and mitigate risks, such as market volatility or supply chain disruptions, by providing real-time insights and predictive analytics. 
                    This can help you make informed decisions and minimize potential losses.
                </p>
            </div>
        </div>

    </div>
</section>


<style>

/*/////////// Section1 ////////////////////////////////////////*/

    .sec-cont {
        max-width: 100%;
    }

    .sec-title {
        font-size: 55px;
        margin: 0px;
        color: #e4e4e4;
    }

    .sec-sub-title {
        font-size: 25px;
        margin: 15px 0px 0px 0px;
        color: #e4e4e4;
    }

    .top {
        display: grid;
        align-items: center;
        justify-content: normal;
        background-color: #000000;
        padding: 50px 0px 100px 0px;
        text-transform: capitalize;
        margin: -80px 0px 0px 0px;
        overflow: hidden;
        position: relative;
        height: 900px;
    }

    .top-content-cont {
        width: 80%;
        display: grid;
        align-items: center;
        justify-items: normal;
        grid-template-columns: auto auto;
        /* justify-content: space-around; */
        color: #e4e4e4;
        text-transform: capitalize;
    }

    /* .top-content-cont > div {
        display: block;
        justify-items: center;
        align-items: center;
        justify-content: center;
        text-align: center;
    } */

    .main-container {
        display: grid;
        justify-items: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: -200px;
        z-index: 2;
    }


    .main-container > h1 {
        font-size: 85px;
        font-weight: 700;
        margin: 0px;
        padding: 0px;
        color: #e4e4e4;
    }

    .main-container > p {
        font-size: 35px;
        margin: 0px;
        padding: 0px;
        color: #21e1fd;
    }

    .side-container {
        display: grid;
        justify-items: center;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    .side-container > .i1 {
        position: absolute;
        width: 1000px;
        height: 850px;
        opacity: 0.7;
        z-index: 1;
    }

    .side-container > div {
        margin-top: -50px !important;
        z-index: 2;
        position: absolute;
        bottom: 100px;
    }

    .side-container > div > p {
        font-size: 35px;
        margin: 0px;
        padding: 0px;
        color: #e4e4e4;
        text-align: left;
    }

    /* .animation {
        position: absolute;
        width: 400px;
        height: 400px;
        opacity: 0.05;
        top: 500px;
        left: 200px;
        z-index: -1;
        transform: rotate(-20deg);
        animation: movement 15s infinite linear;
    }

    .animation > img {
        width: 100%;
        height: 100%;
    } */

    @keyframes movement {
        0%   {
            transform: rotate(-20deg);
            top: 500px;
        }
        25%  {
            transform: rotate(0deg);
            top: 400px;
            left: 300px;
        }
        50%  {
            transform: rotate(10deg);
            top: 300px;
            left: 400px;
        }
        75%  {
            transform: rotate(20deg);
            top: 200px;
            left: 500px;
        }
        100% {
            transform: rotate(-20deg);
            top: 500px;
            left: 200px;
        }
    }

/*/////////// Button % Animation ////////////////////////////////////////*/

    .wrap {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button {
        margin: 30px 0px 0px 0px;
        width: 300px;
        min-height: 60px;
        font-family: 'Nunito', sans-serif;
        font-size: 22px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-weight: 700;
        color: #313133;
        background: #21e1fd;
        /* background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%); */
        border: none;
        border-radius: 1000px;
        box-shadow: 12px 12px 24px #4fd1c5a3;
        transition: all 0.3s ease-in-out 0s;
        cursor: pointer;
        outline: none;
        position: relative;
        padding: 10px 35px;
    }

    button::before {
        content: '';
        border-radius: 1000px;
        min-width: calc(300px + 12px);
        min-height: calc(60px + 12px);
        border: 6px solid #21e1fd;
        box-shadow: 0 0 60px #21e1fd;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
    }

    .button:hover, .button:focus {
        color: #313133;
        transform: translateY(-6px);
    }

    button:hover::before, button:focus::before {
    opacity: 1;
    }

    button::after {
        content: '';
        width: 30px; height: 30px;
        border-radius: 100%;
        border: 6px solid #00FFCB;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ring 1.5s infinite;
    }

    button:hover::after, button:focus::after {
        animation: none;
        display: none;
    }

    @keyframes ring {
        0% {
            width: 30px;
            height: 30px;
            opacity: 1;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }


/*/////////// Button % Animation ////////////////////////////////////////*/

/*/////////// Section1 ////////////////////////////////////////*/










/*/////////// Section2 ////////////////////////////////////////*/


    .sec2 {
        display: grid;
        align-items: center;
        justify-content: center;
        background-color: #747af8;
        background-color: #2469f4;
        padding: 50px 20px 100px 20px;
        text-transform: capitalize;
        margin: 0px 0px 0px 0px;
        /* overflow: hidden; */
    }

    .features-cont {
        margin: 50px 0px 0px 0px;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: auto auto auto;
        gap: 20px;
    }

    .feature {
        width: 200px;
        height: 320px;
        background-color: #fff;
        border-radius: 20px;
        padding: 10px 30px 30px;
    }

    .feature > h1 {
        color: #2469f4;
    }

    .feat-img-cont {
        margin: 20px 0px;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .feat-img-cont > img {
        width: 100px;
        height: auto;
    }


/*/////////// Section2 ////////////////////////////////////////*/










/*/////////// Section3 ////////////////////////////////////////*/

    .sec3 {
        display: grid;
        align-items: center;
        justify-content: center;
        background-color: #747af8;
        background-color: #000000;
        padding: 50px 20px 100px 20px;
        text-transform: capitalize;
        margin: 0px 0px 0px 0px;
        /* overflow: hidden; */
    }

    .features-cont {
        margin: 50px 0px 0px 0px;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: auto auto auto;
        gap: 20px;
    }

    .contract-address-container {
        display: grid;
        align-items: center;
        justify-items: center;
        margin: 100px 0px 100px 0px;
    }

    .contract-address-container > div {
        display: grid;
        align-items: center;
        justify-items: center;
        justify-content: left;
        grid-template-columns: auto auto;
    }   

    .contract-address-container > div > p {
        color: #e4e4e4;
        font-size: 20px;
        align-items: center;
        justify-content: baseline;
    }

    .contract-address-container > div > img {
        width: 30px;
        height: auto;
        margin-right: 10px;
    }

    .contract-address {
        color: #ffffff;
        font-size: 22px;
        cursor: pointer;
        box-shadow: 0px 0px 15px 5px #21e1fd;
        border-radius: 5px;
        transition: all 0.3s linear;
        padding: 5px 10px;
    }

    .contract-address:hover {
        background-color: #21e1fd;
        color: black;
    }

    .sec3-info1 {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: auto auto;
        max-width: 900px;
        margin: 100px 0px 0px 0px;
    }

    .sec3-info1 > div > h1 {
        color: #e4e4e4;
        font-size: 30px;
        align-items: center;
    }

    .sec3-info1 > div > p {
        color: #e4e4e4;
        font-size: 20px;
        align-items: center;
    }

    .sec3-info1 > img {
        max-width: 700px;
        width: 100%;
        height: auto;
    }

    .sec3-info2 {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: auto auto;
        justify-content: center;
        gap: 15px;
    }

    .sec3-info2 > div {
        width: 200px;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: auto;
        background-color: #747af8;
    }

    .sec3-info2 > div > h1 {
        margin: 10px;
        color: #e4e4e4;
        font-size: 24px;
        align-items: center;
    }

    .sec3-info2 > div > p {
        color: #ffffff;
        font-size: 17px;
        align-items: center;
        margin: 0px 0px 10px 0px;
    }



/*/////////// Section3 ////////////////////////////////////////*/











/*/////////// Section4 ////////////////////////////////////////*/

    .sec4 {
        display: grid;
        align-items: center;
        justify-content: center;
        background-color: #747af8;
        padding: 50px 20px 100px 20px;
        text-transform: capitalize;
        margin: 0px 0px 0px 0px;
        /* overflow: hidden; */
    }

    .sec4-info {
        display: grid;
        align-items: center;
        justify-items: center;
        margin: 50px 0px;
        max-width: 800px;
    }

    .sec4-info > p {
        font-size: 25px;
        margin: 0px;
        padding: 0px;
        color: #e4e4e4;
        text-align: left;
        text-shadow: 1px 1px 5px #000000;
    }

    .sec4-info2 {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: auto auto auto;
        gap: 10px 20px;
    }

    .sec4-info2 > div {
        max-width: 350px;
        display: grid;
        align-items: flex-start;
        justify-items: center;
        grid-template-columns: auto;
        gap: 10px;
        margin: 20px 0px;
    }

    .sec4-info2 > div > h1 {
        width: 100%;
        font-size: 25px;
        margin: 0px;
        padding: 0px;
        color: #e4e4e4;
        text-shadow: 1px 1px 5px #000000;
        text-align: left;
    }

    .sec4-info2 > div > p {
        font-size: 18px;
        margin: 0px;
        padding: 0px;
        color: #e4e4e4;
        text-align: left;
    }

/*/////////// Section4 ////////////////////////////////////////*/

@media only screen and (min-width: 601px) and (max-width: 880px) {
    .features-cont {
        grid-template-columns: auto auto;
    }

    .sec4-info2 {
        grid-template-columns: auto auto;
    }

    .sec4-info2 > div {
        gap: 10px 10px;
    }
}

@media only screen and (min-width: 1px) and (max-width: 600px) {
    .top-content-cont {
        grid-template-columns: auto;
        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .main-container {
        display: grid;
        justify-items: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        z-index: 2;
    }

    .side-container > img {
        position: absolute;
        width: 900px;
        height: 850px;
        opacity: 0.2 !important;
        z-index: 1;
    }

    .side-container > div {
        z-index: 2;
        position: absolute;
        bottom: 300px;
        left: 50px;
    }

    .features-cont {
        grid-template-columns: auto;
    }

    .contract-address {
        font-size: 13px;
    }

    .sec3-info1 {
        grid-template-columns: auto;
    }

    .sec3-info2 {
        grid-template-columns: auto;
    }

    .sec4-info2 {
        grid-template-columns: auto;
    }

    .sec4-info2 > div {
        gap: 10px 10px;
    }
}


</style>
