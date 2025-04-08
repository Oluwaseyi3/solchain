import React, { useState, useEffect } from 'react';
import recone from './images/recone.png';
import overlay from "./images/overlay.png"
import AppBar from './components/AppBar';
import vec1 from "./images/vec1.png"
import seca from "./images/seca.png"
import secb from "./images/secb.png"
import card from "./images/card.png"
import third from "./images/third.png"
import circle from "./images/circle.png"
import fx from "./images/fx.jpg"
import forth from "./images/forth.png"
import lefta from "./images/lefta.png"
import rightb from "./images/rightb.png"
import shell from "./images/shell.png"
import locked from "./images/locked.png"
import last from "./images/last.png"
import plis from "./images/plis.png"
import line from "./images/line.png"
import linked from "./images/linked.png";
import twitter from "./images/twitter.png";
import { Collapse }
  from
  "antd"
  ;
import liquid from "./images/liquid.png"
import network from "./images/network.png"

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${recone}), url(${overlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: "white"

          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center"
        }}
        className='w-full  h-[730px] md:h-[500px] px-10'
      >
        <AppBar />
        <div className='flex flex-col justify-center items-center text-center gap-10 mt-20 '>
          <h1 className='md:text-5xl text-bold text-3xl font-Poppins'>SOLANA CASH MACHINE</h1>
          <h1 className='text-lg'>The world’s fastest rewards system for $USDT on Solana!<br /> </h1>
          <h1 className='text-lg'>The Solana Cash Machine distributes $USDT to ALL holders every few minutes.</h1>
          <div className='flex gap-5 flex-col w-full items-center justify-center md:flex-row'>
            <button class="w-full bg-green-500 max-w-[300px] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg">
              Buy $CASH now
            </button>
            <button class="w-full bg-green-500 max-w-[300px] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg">
              Refer and Earn
            </button>
            <button class="w-full bg-green-500 max-w-[300px] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg">
              Play $CASH Casino
            </button>
            {/* <button class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-lg">
              Play $CASH Casino
            </button> */}


          </div>
        </div>

      </div>


      <div
        style={{
          backgroundImage: `url(${seca}), url(${secb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          alignItems: "center",
          display: isSmallScreen ? 'none' : 'flex',

        }}
        className='w-full flex h-[780px] hidden md:block md:h-[500px] px-10 relative'
      >
        <div className="relative">
          <img
            src={card}
            alt=""
            className=""

          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className='flex md:flex-row flex-col items-center gap-10 flex-wrap'>
              <div className='text-center'>
                <h1 className="text-2xl font-bold">1 Billion</h1>
                <p className="mt-4 text-sm">Total Supply</p>
              </div>

              <div className='text-center'>
                <h1 className="text-2xl font-bold">5%</h1>
                <p className="mt-4 text-sm">Tax On Transactions</p>
              </div>

              <div className='text-center'>
                <h1 className="text-2xl font-bold">10%</h1>
                <p className="mt-4 text-sm">LP Burned</p>

              </div>

              <div className='text-center'>
                <h1 className="text-2xl font-bold">100%</h1>
                <p className="mt-4 text-sm">Community Owned</p>
              </div>

              <div className='text-center'>
                <h1 className="text-2xl font-bold">100%</h1>
                <p className="mt-4 text-sm">Automated</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${third})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: "white",

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",

        }}
        className='w-full flex-wrap h-[930px] lg:h-[600px] px-10 display flex-col md:flex-row justify-center'
      >

        <div className='relative  items-center gap-[100px]'>
          <img src={circle} alt="" className='h-[500px]' />
          <div className="absolute  inset-0 pt-2" >
            <div className='py-4'>
              <h1 className='text-lg text-green-400 font-bold'>Fast Rewards</h1>
              <h1 className='text-base'>Receive USDT rewards automatically every few minutes. Just 'hodl' to earn</h1>
            </div>
            <div className='py-4'>
              <h1 className='text-lg text-green-400 font-bold'>Price Is Irrelevant</h1>
              <h1 className='text-base'>Rewards are independent of the volatile token price. Stack $CASH and earn.</h1>
            </div>

            <div className='py-4'>
              <h1 className='text-lg text-green-400 font-bold'>Play Games</h1>
              <h1 className='text-base'>Earn more $CASH by spending $CASH in the $CASH Casino.</h1>
            </div>

            <div className='py-4'>
              <h1 className='text-lg text-green-400 font-bold'>Compound & Earn</h1>
              <h1 className='text-base'>Reinvest your $USDT rewards to maximize earnings. Stack and earn.</h1>
            </div>

            <div className='py-4'>
              <h1 className='text-lg text-green-400 font-bold'>Buybacks & Marketing</h1>
              <h1 className='text-base'>$CASH has ongoing buybacks and marketing support, unlike competitors.</h1>
            </div>

            <div className="absolute  inset-0 pt-2" >
              <div className='py-4'>
                <h1 className='text-lg text-green-400 font-bold'>Fast Rewards</h1>
                <h1 className='text-base'>Receive USDT rewards automatically every few minutes. Just 'hodl' to earn</h1>
              </div>
              <div className='py-4'>
                <h1 className='text-lg text-green-400 font-bold'>Price Is Irrelevant</h1>
                <h1 className='text-base'>Rewards are independent of the volatile token price. Stack $CASH and earn.</h1>
              </div>

              <div className='py-4'>
                <h1 className='text-lg text-green-400 font-bold'>Play Games</h1>
                <h1 className='text-base'>Earn more $CASH by spending $CASH in the $CASH Casino.</h1>
              </div>

              <div className='py-4'>
                <h1 className='text-lg text-green-400 font-bold'>Compound & Earn</h1>
                <h1 className='text-base'>Reinvest your $USDT rewards to maximize earnings. Stack and earn.</h1>
              </div>

              <div className='py-4'>
                <h1 className='text-lg text-green-400 font-bold'>Buybacks & Marketing</h1>
                <h1 className='text-base'>$CASH has ongoing buybacks and marketing support, unlike competitors.</h1>
              </div>

            </div>
          </div>
        </div>

        <img src={fx} className='lg:w-[600px] lg:h-[500px] md:w-[300px] md:-[300px] w-[200px] h-[200px]' />
      </div>

      <div
        style={{
          backgroundImage: ` url(${forth})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: "white"

          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center"
        }}
        className='w-full  h-[820px] md:h-[550px] px-10'
      >
        <div className='flex relative  flex-row justify-between items-start flex-wrap '>
          <img src={lefta} alt="" className='w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]' />
          <h1 className='text-4xl absolute text-center md:relative inset-0 pt-20 bold'>REAL FAIR LAUNCH</h1>
          <img src={rightb} alt="" className='w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]' style={{ display: isSmallScreen ? 'none' : '' }} />
        </div>

        <div className='flex relative  flex-row justify-center gap-[100px] items-start flex-wrap '>
          <div className='h-[100%] text-center flex flex-col items-center gap-5'>
            <h1 className='text-3xl text-green-400'>NO TEAM TOKENS!</h1>
            <img src={locked} alt='' />
          </div>
          <div className='h-[100%] text-center flex flex-col items-center gap-5'>
            <h1 className='text-3xl text-green-400'>NO PRESALE!</h1>
            <img src={shell} alt='' />
          </div>

          <div className='h-[100%] text-center flex flex-col items-center gap-5'>
            <h1 className='text-3xl text-green-400'>NO MAX WALLET LIMITS!</h1>
            <img src={liquid} alt='' />
          </div>
        </div>
      </div>


      <div
        style={{
          backgroundImage: ` url(${forth})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: "white"

          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center"
        }}
        className='w-full  h-[1050px] md:h-[850px] px-10'
      >
        <div className='flex relative  flex-row justify-between items-center flex-wrap '>
          <img src={lefta} alt="" className='w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]' />
          <h1 className='text-4xl absolute text-center md:relative inset-0 pt-20 bold'>HOW IT WORKS</h1>
          <img src={rightb} alt="" className='w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]' style={{ display: isSmallScreen ? 'none' : '' }} />
        </div>

        <div className='flex relative  flex-row justify-center w-full py-20 gap-10 items-start flex-wrap '>

          <div className='h-[100%] text-left py- pb-[30px] flex flex-col px-3 md:px-20 items-start  gap-5 '>
            <h1 className='text-lg text--400   '>- 5% tax collected from every transaction</h1>
            <h1 className='text-lg text--400'>- Tax automatically converted to USDT</h1>
            <h1 className='text-lg text--400'>- Automatically distributes 80% (4%) of all tax collected to all holders of $CASH</h1>
            <h1 className='text-lg text--400'>- 10% (0.5%) of all tax collected goes to daily buybacks</h1>
            <h1 className='text-lg text--400'>- Remaining 10% (0.5%) goes towards further marketing and development</h1>
            <h1 className='text-lg text--400'>- Buyback, marketing, and development funding ensures continued price support and promotional
              activities<br /> compared to similar reward tokens with no such budgets.</h1>
            <h1 className='text-lg text--400 pb-5'>- Rewards are proportionate to your holdings</h1>
          </div>
          <img src={network} alt='' className='lg:h-[205px] h-[100px]' style={{ display: isSmallScreen ? 'none' : '' }} />
        </div>
      </div>

      {/* <div className='bg-black text-white w-full flex flex-col gap-[20px] justfify-center items-center'>
        <h1 className='font-bold text-3xl'>
          Frequently Asked Questions
        </h1>

        <Collapse items={items} defaultActiveKey={['1']} />;
      </div> */}

      <div
        style={{
          backgroundImage: `url(${plis}), url(${last})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: "white",

        }}
        className='w-full  h-[730px] md:h-[500px] flex gap-[40px] flex-col  justify-center items-start px-10'
      >
        <div>
          <img src={line} alt='' />
        </div>

        <div className='flex flex-row justify-around w-full text-left gap-20 flex-wrap'>
          <div className='flex-col flex gap-10'>
            <h1 className='text-green-400 text-2xl font-bold'>SOLANA CASH MACHINE</h1>
            <h1 className='text-green-400'>The world’s fastest rewards system for $USDT on Solana!</h1>

          </div>

          <div className='md:flex-col flex-row flex gap-10 text-left justify-start items-start'>
            <h1 className='text-green-400 text-left'>Government</h1>
            <h1 className='text-green-400 text-left'>Security</h1>
            <div className='flex flex-row gap-5'>
              <img src={twitter} alt="Twitter" style={{ width: '30px', height: '30px' }} />
              <img src={linked} alt="Twitter" style={{ width: '30px', height: '30px' }} />
            </div>
          </div>

        </div>
      </div>
    </div>


  );
}

export default App;
