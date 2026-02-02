'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export default function SimpleMenu() {
    const [webPlus, webPlusClicked] = useState(false);
    const [brandPlus, brandPlusClicked] = useState(false);
    const [leadPlus, leadPlusClicked] = useState(false);
    const [threePlus, threePlusClicked] = useState(false);


    const webOptions = ['UI + Motion Design', 'UX Design', 'SEO Management', 'Domain Management', 'Website Development'];
    const leadOptions = ['B2B Leads', 'Web-scraped Leads', 'Business Research'];
    const brandOptions = ['Brand Creation', 'Logo Development', 'Typography', 'Color Palette + Brand Colors'];
    const threeOptions = ['Product Development', '3D Web Design', '3D Virtual Experiences/Tours (Starting Soon)'];

    const handleWebClick = () => webPlusClicked(prev => !prev);
    const handleBrandClick = () => brandPlusClicked(prev => !prev);
    const handleLeadClick = () => leadPlusClicked(prev => !prev);
    const handleThreeClick = () => threePlusClicked(prev => !prev);

    return (
        <section className='w-full h-3/4 flex flex-col items-center justify-center'>
            <ul className='flex flex-col w-3/4 lg:w-2/4 gap-5 mt-5'>
                
                {/* Web Menu */}
                <motion.li
                    animate={{ x: brandPlus || leadPlus || threePlus ? 200 : 0, opacity: brandPlus || leadPlus || threePlus ? 0 : 1 }}
                    className='w-full relative'
                    onClick={handleWebClick}

                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className='cursor-pointer'>UI/UX Design</span>
                        {webPlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {webPlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {webOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>

                {/* Branding Menu */}
                <motion.li
                    animate={{ x: webPlus || leadPlus || threePlus ? 200 : 0, opacity: webPlus || leadPlus || threePlus? 0 : 1 }}
                    className='w-full relative'
                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={handleBrandClick}
                    >
                        <span className='cursor-pointer'>Branding</span>
                        {brandPlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {brandPlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {brandOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>

                {/* Lead Generation Menu */}
                <motion.li
                    animate={{ x: webPlus || brandPlus || threePlus ? 200 : 0, opacity: webPlus || brandPlus || threePlus ? 0 : 1 }}
                    className='w-full relative'
                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={handleLeadClick}
                    >
                        <span className='cursor-pointer'>Lead Generation</span>
                        {leadPlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {leadPlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {leadOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>
                <motion.li
                    animate={{ x: webPlus || brandPlus || leadPlus ? 200 : 0, opacity: webPlus || brandPlus || leadPlus ? 0 : 1 }}
                    className='w-full relative'
                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={handleThreeClick}
                    >
                        <span className='cursor-pointer'>3D Experiences</span>
                        {threePlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {threePlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {threeOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>

            </ul>
        </section>
    );
}
