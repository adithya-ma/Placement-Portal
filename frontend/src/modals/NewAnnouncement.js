import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function NewAnnouncement() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(heading, description);
    const announcement = { heading, description };
    axios.post("http://localhost:5000/api/announcements", announcement).then((response) => {
      console.log(response.data);
      console.log('vishayam')
      setHeading('');
      setDescription('');
    }).catch()
  }

  return (
    <>
      <Button variant="primary" style={{ backgroundColor: '#ffa8a2', height: '45px', color: '#660a0a' }} onClick={handleShow}>
        + New Announcement
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <label>heading:</label>
            <input type='text' value={heading} onChange={(e) =>
              setHeading(e.target.value)
            } />
            <label>description:</label>
            <input type='text' value={description} onChange={(e) =>
              setDescription(e.target.value)
            } />
            <button type='submit'>Submit</button>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default NewAnnouncement;