import React, { useState, useEffect } from 'react';
import recone from './images/recone.png';
import overlay from "./images/overlay.png";
import AppBar from './components/AppBar';
import vec1 from "./images/vec1.png";
import seca from "./images/seca.png";
import secb from "./images/secb.png";
import card from "./images/card.png";
import third from "./images/third.png";
import circle from "./images/circle.png";
import fx from "./images/fx.jpg";
import forth from "./images/forth.png";
import lefta from "./images/lefta.png";
import rightb from "./images/rightb.png";
import shell from "./images/shell.png";
import locked from "./images/locked.png";
import last from "./images/last.png";
import plis from "./images/plis.png";
import line from "./images/line.png";
import linked from "./images/linked.png";
import twitter from "./images/twitter.png";
import liquid from "./images/liquid.png";
import network from "./images/network.png";
import { Collapse } from "antd";

// Component for feature cards with icon and text
const FeatureCard = ({ title, description, icon }) => (
  <div className="h-full w-full sm:w-auto text-center flex flex-col items-center gap-3 md:gap-5 px-4 py-6 md:py-8">
    <h2 className="text-xl sm:text-2xl md:text-3xl text-green-400 font-bold">{title}</h2>
    {icon && <img src={icon} alt={title} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />}
  </div>
);

// Component for feature list items
const FeatureItem = ({ title, description }) => (
  <div className="py-2 md:py-3">
    <h3 className="text-base sm:text-lg text-green-400 font-bold">{title}</h3>
    <p className="text-sm sm:text-base">{description}</p>
  </div>
);

// Stat display component
const StatDisplay = ({ value, label }) => (
  <div className="text-center px-2 sm:px-4 py-3 w-1/2 sm:w-auto">
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{value}</h2>
    <p className="mt-1 sm:mt-2 text-xs sm:text-sm">{label}</p>
  </div>
);

function App() {
  const [screenSize, setScreenSize] = useState({
    isXSmall: false,  // < 480px
    isSmall: false,   // < 640px
    isMedium: false,  // < 768px
    isLarge: false,   // < 1024px
    isXLarge: false   // >= 1024px
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isXSmall: width < 480,
        isSmall: width < 640,
        isMedium: width < 768,
        isLarge: width < 1024,
        isXLarge: width >= 1024
      });
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

  // FAQ items
  const faqItems = [
    {
      key: '1',
      label: 'How do I earn USDT rewards?',
      children: <p>Simply hold $CASH tokens in your wallet. The rewards are automatically distributed to all holders every few minutes based on your percentage of the total supply.</p>,
    },
    {
      key: '2',
      label: 'What is the tax structure?',
      children: <p>There is a 5% tax on all transactions. 80% (4%) of this tax is distributed as USDT rewards to holders, 10% (0.5%) funds buybacks, and 10% (0.5%) goes to marketing and development.</p>,
    },
    {
      key: '3',
      label: 'Is there a minimum amount to hold?',
      children: <p>There is no minimum amount required to earn rewards. However, the more $CASH tokens you hold, the more USDT rewards you will receive proportionally.</p>,
    },
    {
      key: '4',
      label: 'How does the $CASH Casino work?',
      children: <p>The $CASH Casino is a platform where you can play various games using your $CASH tokens, with opportunities to earn more tokens through gameplay.</p>,
    },
  ];

  // Feature list for benefits section
  const featureList = [
    {
      title: 'Fast Rewards',
      description: 'Receive USDT rewards automatically every few minutes. Just \'hodl\' to earn'
    },
    {
      title: 'Price Is Irrelevant',
      description: 'Rewards are independent of the volatile token price. Stack $CASH and earn.'
    },
    {
      title: 'Play Games',
      description: 'Earn more $CASH by spending $CASH in the $CASH Casino.'
    },
    {
      title: 'Compound & Earn',
      description: 'Reinvest your $USDT rewards to maximize earnings. Stack and earn.'
    },
    {
      title: 'Buybacks & Marketing',
      description: '$CASH has ongoing buybacks and marketing support, unlike competitors.'
    }
  ];

  // How it works bullet points
  const howItWorksPoints = [
    '5% tax collected from every transaction',
    'Tax automatically converted to USDT',
    'Automatically distributes 80% (4%) of all tax collected to all holders of $CASH',
    '10% (0.5%) of all tax collected goes to daily buybacks',
    'Remaining 10% (0.5%) goes towards further marketing and development',
    'Buyback, marketing, and development funding ensures continued price support and promotional activities compared to similar reward tokens with no such budgets.',
    'Rewards are proportionate to your holdings'
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${recone}), url(${overlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full min-h-[550px] xs:min-h-[600px] sm:min-h-[650px] md:min-h-screen lg:min-h-[600px] px-3 xs:px-4 md:px-6 lg:px-10 py-4 sm:py-6 text-white"
      >
        <AppBar />
        <div className="flex flex-col justify-center items-center text-center gap-4 xs:gap-6 md:gap-10 mt-10 xs:mt-12 sm:mt-16 md:mt-20 max-w-6xl mx-auto">
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold">SOLANA CASH MACHINE</h1>
          <p className="text-base xs:text-lg md:text-xl max-w-3xl px-2">
            The world's fastest rewards system for $USDT on Solana!
            <br className="hidden xs:block" />
            The Solana Cash Machine distributes $USDT to ALL holders every few minutes.
          </p>
          <div className="flex gap-3 xs:gap-4 flex-col xs:flex-row w-full items-center justify-center max-w-4xl px-3 xs:px-4">
            <button className="min-w-[250px] xs:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-300 text-sm sm:text-base">
              Buy $CASH now
            </button>
            <button className="min-w-[250px] bg-green-500 hover:bg-green-600 text-white font-semibold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-300 text-sm sm:text-base">
              Refer and Earn
            </button>
            <button className="min-w-[250px] xs:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-300 text-sm sm:text-base">
              Play $CASH Casino
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          backgroundImage: `url(${seca}), url(${secb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full py-12 xs:py-16 md:py-20 lg:py-24 px-3 xs:px-4 md:px-6 lg:px-10 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-60 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <StatDisplay value="1 Billion" label="Total Supply" />
              <StatDisplay value="5%" label="Tax On Transactions" />
              <StatDisplay value="10%" label="LP Burned" />
              <StatDisplay value="100%" label="Community Owned" />
              <StatDisplay value="100%" label="Automated" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          backgroundImage: `url(${third})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full py-12 xs:py-16 md:py-20 lg:py-24 px-3 xs:px-4 md:px-6 lg:px-10 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <img src={circle} alt="Features circle" className="w-full" />
                <div className="absolute inset-0 flex flex-col justify-center p-4 xs:p-6 sm:p-8 md:p-10 o max-h-full">
                  {featureList.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src={fx}
                alt="Cash Machine"
                className="w-full max-w-sm xs:max-w-md sm:max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fair Launch Section */}
      <section
        style={{
          backgroundImage: `url(${forth})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full py-12 xs:py-16 md:py-20 lg:py-24 px-3 xs:px-4 md:px-6 lg:px-10 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row justify-between items-center mb-8 sm:mb-12 lg:mb-16">
            <img src={lefta} alt="" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 hidden sm:block" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-center mx-auto sm:mx-0">REAL FAIR LAUNCH</h2>
            <img src={rightb} alt="" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            <FeatureCard title="NO TEAM TOKENS!" icon={locked} />
            <FeatureCard title="NO PRESALE!" icon={shell} />
            <FeatureCard title="NO MAX WALLET LIMITS!" icon={liquid} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        style={{
          backgroundImage: `url(${forth})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full py-1 xs:py-1 md:py-2 lg:py-2 px-0 xs:px-0 md:px-1 lg:px-1 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row justify-between items-center mb-8 sm:mb-12 lg:mb-16">
            <img src={lefta} alt="" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 hidden sm:block" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-center mx-auto sm:mx-0">HOW IT WORKS</h2>
            <img src={rightb} alt="" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 hidden sm:block" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10">
            <div className="w-full md:w-2/3">
              <ul className="space-y-3 list-inside">
                {howItWorksPoints.map((point, index) => (
                  <li key={index} className="text-sm sm:text-base md:text-lg flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
              <img src={network} alt="Network" className="max-w-xs sm:max-w-sm md:max-w-xs" />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-black text-white w-full py-12 xs:py-16 md:py-20 lg:py-24 px-3 xs:px-4 md:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-2xl text-white xs:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <Collapse
            items={faqItems}
            defaultActiveKey={['1']}
            className="bg-gray-900 text-white border-gray-700 custom-collapse-header-white"
            style={{ color: 'white' }}
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundImage: `url(${plis}), url(${last})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full py-12 xs:py-16 md:py-20 lg:py-24 px-3 xs:px-4 md:px-6 lg:px-10 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 md:mb-10">
            <img src={line} alt="Divider" className="w-full max-w-sm xs:max-w-md mx-auto" />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 md:gap-10">
            <div className="sm:w-1/2">
              <h2 className="text-xl sm:text-2xl text-green-400 font-bold mb-2 sm:mb-4">SOLANA CASH MACHINE</h2>
              <p className="text-sm sm:text-base text-green-400">The world's fastest rewards system for $USDT on Solana!</p>
            </div>

            <div className="sm:w-1/2 flex flex-col sm:flex-row justify-between">
              <div className="mb-4 sm:mb-0">
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="text-green-400 hover:text-green-300 transition duration-300 text-sm sm:text-base">Government</a></li>
                  <li><a href="#" className="text-green-400 hover:text-green-300 transition duration-300 text-sm sm:text-base">Security</a></li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition duration-300">
                  <img src={twitter} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition duration-300">
                  <img src={linked} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;