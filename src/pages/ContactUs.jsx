import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/loader/Loader';
import axios from 'axios';
import Modal from '../components/Modal';

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}query`,
                {
                    name,
                    email,
                    query
                }
            );

            if (res.data?.message) {
                setModal(true);
            }
        } catch (e) {
            console.log(e);
            toast.error(e?.response?.data?.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setIsLoading(false);
        }
    }

    const handleCloseModal = () => {
        setModal(false);
        setEmail('');
        setName('');
        setQuery('');
    }
    return (
        <>
            {modal && <Modal handleCloseModal={handleCloseModal}/>}
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='contact'>
                <div className="container">
                    <section className='contact-details'>
                        <h2 className='contact-details-title'>About Us</h2>
                        <p className='contact-details-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis sed aliquid porro laudantium ut delectus cumque esse harum suscipit placeat quos, molestias quam, est praesentium quidem blanditiis mollitia excepturi quia optio neque tempora. Magnam repudiandae laudantium consequatur dicta nisi quis hic, quia magni quod assumenda at veniam incidunt ut esse similique asperiores alias voluptas delectus necessitatibus ullam ea eos expedita! Quisquam asperiores porro quo ad temporibus praesentium, doloremque animi, modi quidem repellendus adipisci? Corporis, cum aut obcaecati praesentium tempore recusandae dicta perferendis vitae rem illo consequatur laboriosam alias deserunt nulla id suscipit quod eum minima similique, maiores ex repellendus! </p>
                        <button className='learn-more'>Learn More</button>
                    </section>
                    <section className='contact-form'>
                        <div className="contact-form-text">
                            <h3>Reach Out To Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, possimus minus. Earum optio ipsam animi provident commodi?</p>
                            <p>LTempora sit quasi, impedit illo adipisci deserunt adipisicing elit. Obcaecati, possimus minus..</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-item">
                                <input type="text" name="name" value={name} className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-item">
                                <input type="email" name="email" value={email} className="form-input" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-item">
                                <textarea name='query' className='form-input' value={query} placeholder='Enter your query here..'
                                    onChange={(e) => setQuery(e.target.value)} rows={4} required>

                                </textarea>
                            </div>
                            <div className="form-item">
                                <button type='submit' className='contact-btn'>{isLoading ? <Loader /> : "Submit"}</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ContactUs