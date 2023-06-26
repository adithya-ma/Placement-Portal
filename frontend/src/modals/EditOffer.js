import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './NewAnnouncement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jobscontext } from '../context/Jobscontext';
import { UserAuth } from '../context/authcontext';

function EditOffer({ onclose, EditOffermodal,prefilldata }) {

    const authcontext = useContext(UserAuth);
    if (!authcontext) {
        console.log("cannot ascess outside the provider");
    }
    const { user } = authcontext;

    const context = useContext(Jobscontext);
    const { dispatch } = context;
    const [companyname, setcompanyname] = useState();
    const [year, setyear] = useState()
    const [CSE, setCSE] = useState()
    const [AI, setAI] = useState()
    const [MECH, setMECH] = useState()
    const [CIVIL, setCIVIL] = useState()
    const [EEE, setEEE] = useState()
    const [ECE, setECE] = useState()




    const handlesubmit = (e) => {

        e.preventDefault();
        onclose()


        // axios.post("http://localhost:9000/api/announcements", announcement,
        //     { headers: { 'Authorization': `Bearer ${user.token}` } }).then((response) => {
        //         console.log(response.data);
        //         dispatch({ type: 'CREATEANNOUNCEMENT', payload: response.data });

        //         console.log('vishayam')
        //         setHeading('');
        //         setDescription('');
        //     }).catch()
    }

    if (EditOffermodal && prefilldata) {
        return (
            <>
                <div className='announcementedit-modal-container' >
                    <div className='announcementedit-modal-content' >
                        <button className='modal-close-btn' onClick={onclose} ><p>X</p></button>
                        <div className='announcementedit-modal-title'>
                            <h3>Add an offer</h3>
                            <hr></hr>
                        </div>
                        <div className='announcementedit-modal-body'>
                            <form onSubmit={handlesubmit} className="announcement-form">
                                <div className='title'>

                                    <div className='title-label'>
                                        <label>Recruiter:</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='text' value={prefilldata.companyname} onChange={(e) =>
                                            setcompanyname(e.target.value)
                                        } />
                                    </div>

                                    <div className='title-label'>
                                        <label>Year of offer :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.year} onChange={(e) =>
                                            setyear(e.target.value)
                                        } />
                                    </div>


                                    <div className='title-label'>
                                        <label>CSE :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.CSE} onChange={(e) =>
                                            setCSE(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>AI :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.AI} onChange={(e) =>
                                            setAI(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>MECH :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.MECH} onChange={(e) =>
                                            setMECH(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>EEE :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.EEE} onChange={(e) =>
                                            setEEE(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>ECE :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.ECE} onChange={(e) =>
                                            setECE(e.target.value)
                                        } />
                                    </div>

                                    <div className='title-label'>
                                        <label>CIVIL :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={prefilldata.CIVIL} onChange={(e) =>
                                            setCIVIL(e.target.value)
                                        } />
                                    </div>

                                </div>

                                <div className='sub'>
                                    <Button className='sub-but' type='submit' >Submit</Button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>


            </>
        );
    }
}
export default EditOffer;