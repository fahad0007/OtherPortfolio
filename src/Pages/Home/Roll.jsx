import React from 'react'
import '../../Roll.css'
import {motion} from 'framer-motion'

const Roll = () => {
        return (
                <section id='timeline' style={{ backgroundImage: 'url(./img/roll.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

                        <h1 className='h1'>Roll & Responsibilities</h1>
                        <p className="leader">Roll And Responsibilities At Enfosys</p>
                        <div className="main">
                                <div className="box">
                                        <motion.div
                                                initial={{opacity: 0, y:-40}}
                                                whileInView={{opacity: 1, y:0}}
                                                transition={{delay:0.4, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">1. Handling Customer Inquiries:

                                                </div>
                                                <div className="liPara"> Answering calls and responding to customer inquiries.</div>
                                                <div className="liPara"> Providing information about products or services.</div>
                                        </motion.div>
                                        <motion.div
                                                        initial={{opacity: 0, y:-40}}
                                                        whileInView={{opacity: 1, y:0}}
                                                        transition={{delay:0.1, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">2. Customer Support:

                                                </div>
                                                <div className="liPara"> Resolving customer issues and complaints.
                                                </div>
                                                <div className="liPara"> Following up with customers to ensure their problems are resolved.</div>
                                        </motion.div>
                                        <motion.div
                                         initial={{opacity: 0, y:-40}}
                                                        whileInView={{opacity: 1, y:0}}
                                                        transition={{delay:0.2, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">3. Sales and Promotion:

                                                </div>
                                                <div className="liPara"> Making outbound calls to potential customers.</div>
                                                <div className="liPara"> Explaining product features and benefits.</div>
                                                <div className="liPara"> Persuading customers to purchase products or services.</div>
                                        </motion.div>
                                        <motion.div
                                         initial={{opacity: 0, y:-40}}
                                                        whileInView={{opacity: 1, y:0}}
                                                        transition={{delay:0.3, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">4. Data Management:

                                                </div>
                                                <div className="liPara"> Maintaining customer records.</div>
                                                <div className="liPara"> Updating CRM systems with call details and customer information.</div>
                                        </motion.div>

                                </div>
                                <div
                                
                                 className="box">
                                        <motion.div
                                        initial={{opacity: 0, y:-40}}
                                                        whileInView={{opacity: 1, y:0}}
                                                        transition={{delay:0.4, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">5. Feedback Collection:

                                                </div>
                                                <div className="liPara"> Gathering customer feedback and suggestions.</div>
                                                <div className="liPara"> Reporting feedback to management for product or service improvement.</div>
                                        </motion.div>
                                        <motion.div
                                        initial={{opacity: 0, y:-40}}
                                                        whileInView={{opacity: 1, y:0}}
                                                        transition={{delay:0.5, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">6. Achieving Targets:

                                                </div>
                                                <div className="liPara"> Meeting daily, weekly, and monthly call and sales targets.</div>
                                                <div className="liPara"> Working towards team goals and objectives.</div>
                                        </motion.div>
                                        <motion.div
                                        initial={{opacity: 0, y:-40}}
                                                        whileInView={{opacity: 1, y:0}}
                                                        transition={{delay:0.6, duration: 0.5}}
                                         className="content-box">
                                                <div className="bold">7. Training and Development:

                                                </div>
                                                <div className="liPara">
                                                        Participating in training sessions to improve product knowledge and communication skills.</div>

                                        </motion.div>


                                </div>
                        </div>

                </section>
        )
}

export default Roll
