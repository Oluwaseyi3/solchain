import React, { useState, useEffect } from 'react';
import linked from "../images/linked.png";
import twitter from "../images/twitter.png";

const AppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Handle responsive detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Link styles with hover handling
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '8px 0',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
    };

    return (
        <nav style={{
            // backgroundColor: '#1F2937',
            color: 'white',
            width: '100%',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '20px 16px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px'
                }}>
                    {/* Logo/Brand */}
                    <div>
                        <h1 style={{
                            color: '#34D399',
                            fontWeight: 'bold',
                            fontSize: isMobile ? '20px' : '30px',
                            margin: 0
                        }}>
                            Solana Cash Machine
                        </h1>
                    </div>

                    {/* Desktop Menu and Social Icons */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '48px'
                        }}>
                            {/* Menu Items */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '32px'
                            }}>
                                <a href="#"
                                    style={linkStyle}
                                    onMouseOver={(e) => e.target.style.color = '#34D399'}
                                    onMouseOut={(e) => e.target.style.color = 'white'}
                                >Government</a>
                                <a href="#"
                                    style={linkStyle}
                                    onMouseOver={(e) => e.target.style.color = '#34D399'}
                                    onMouseOut={(e) => e.target.style.color = 'white'}
                                >Security</a>
                                <a href="#"
                                    style={linkStyle}
                                    onMouseOver={(e) => e.target.style.color = '#34D399'}
                                    onMouseOut={(e) => e.target.style.color = 'white'}
                                >FAQs</a>
                            </div>

                            {/* Social Icons */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                <a href="#"
                                    style={{ opacity: 1, transition: 'opacity 0.2s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.7}
                                    onMouseOut={(e) => e.target.style.opacity = 1}
                                >
                                    <img src={linked} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#"
                                    style={{ opacity: 1, transition: 'opacity 0.2s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.7}
                                    onMouseOut={(e) => e.target.style.opacity = 1}
                                >
                                    <img src={twitter} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    {isMobile && (
                        <button
                            type="button"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '4px'
                            }}
                            onClick={toggleMenu}
                        >
                            <svg style={{ height: '24px', width: '24px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
                <div style={{
                    backgroundColor: '#1F2937',
                    borderTop: '1px solid #374151',
                    position: 'absolute',
                    width: '100%',
                    zIndex: 50,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}>
                    <div style={{
                        padding: '12px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <a href="#"
                            style={{ ...linkStyle, padding: '8px 0' }}
                            onMouseOver={(e) => e.target.style.color = '#34D399'}
                            onMouseOut={(e) => e.target.style.color = 'white'}
                        >Government</a>
                        <a href="#"
                            style={{ ...linkStyle, padding: '8px 0' }}
                            onMouseOver={(e) => e.target.style.color = '#34D399'}
                            onMouseOut={(e) => e.target.style.color = 'white'}
                        >Security</a>
                        <a href="#"
                            style={{ ...linkStyle, padding: '8px 0' }}
                            onMouseOver={(e) => e.target.style.color = '#34D399'}
                            onMouseOut={(e) => e.target.style.color = 'white'}
                        >FAQs</a>
                    </div>

                    <div style={{
                        padding: '16px',
                        borderTop: '1px solid #4B5563',
                        display: 'flex',
                        gap: '16px'
                    }}>
                        <a href="#"
                            style={{ opacity: 1 }}
                            onMouseOver={(e) => e.target.style.opacity = 0.7}
                            onMouseOut={(e) => e.target.style.opacity = 1}
                        >
                            <img src={linked} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                        </a>
                        <a href="#"
                            style={{ opacity: 1 }}
                            onMouseOver={(e) => e.target.style.opacity = 0.7}
                            onMouseOut={(e) => e.target.style.opacity = 1}
                        >
                            <img src={twitter} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default AppBar;