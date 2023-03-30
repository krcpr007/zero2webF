import React from 'react'
import { Link } from 'react-router-dom';
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiPhoneCall } from 'react-icons/fi'
import footerLogoPng from '../../assets/PNG/Logo Horizontal Coloured Light Transparent.png'
// import footerLogoSvg from '../../assets/SVG/Logo Horizontal Coloured Light vector.svg'
function Footer() {
    return (
        <>
            <footer className="bg-[#351228]">
                {/* <hr /> */}
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className='w-44'>
                                <Link to="#" className="block">
                                    <img src={footerLogoPng} alt="logo" className='w-44' />
                                </Link>
                            </div>
                            <div className="px-6">
                                <p className="max-w-sm mt-2 text-[#EFD1C6]">C-65 udarshanpura Industrial Area, Jaipur, Rajasthan  302006</p>

                                <div className="flex mt-6 -mx-2">
                                    {/* <Link to="#"
                                        className="mx-2 transition-colors duration-300 text-[#BB2649]"
                                        aria-label="Reddit">
                                        <FaInstagram className='text-2xl' />
                                    </Link>

                                    <Link to="#"
                                        className="mx-2 transition-colors duration-300 text-[#BB2649]"
                                        aria-label="Facebook">
                                        <FaLinkedin className='text-2xl' />
                                    </Link>

                                    <Link to="#"
                                        className="mx-2 transition-colors duration-300 text-[#BB2649]"
                                        aria-label="Github">
                                        <FaGithub className='text-2xl' />
                                    </Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className=" uppercase text-[#EFD1C6]">About</h3>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Gallery</Link>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Contact Us</Link>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Careers</Link>
                                </div>

                                {/* <div>
                                    <h3 className="text-gray-700 uppercase text-[#EFD1C6]">Blog</h3>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Tec</Link>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Music</Link>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Videos</Link>
                                </div> */}

                                <div>
                                    <h3 className="uppercase text-[#EFD1C6]">Products</h3>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Render Farms</Link>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">MATLAB</Link>
                                    <Link to="#" className="block mt-2 text-sm text-[#EFD1C6] hover:underline">Production house studio</Link>
                                </div>

                                <div>
                                    <h3 className="uppercase text-[#EFD1C6]">Contact</h3>
                                    <span className="block mt-2 text-sm text-[#EFD1C6] hover:underline"> <FiPhoneCall className='inline' /> +91 9119334720</span>
                                    <span className="block mt-2 text-sm text-[#EFD1C6] hover:underline"> <SiGmail className='inline' /> rohit.singh@zero-two.in</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none" />

                    <div>
                        <p className="text-center text-[#EFD1C6]">© ZeroTwo 2020 - All rights reserved</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer