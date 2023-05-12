import EditAnnouncement from "../modals/EditAnnouncement";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Announcement.css";
import moment from "moment";
import { useContext } from "react";
import { Jobscontext } from "../context/jobscontext";
import axios from "axios";

const Announcement = ({ announcement }) => {
  const context=useContext(Jobscontext);
  const {dispatch}=context;
  const handledelete=()=>{
    console.log(announcement._id);
    axios.delete(`http://localhost:9000/api/announcements/${announcement._id}`).then((response)=>{
      console.log(response.data._id);
     dispatch({type:'DELETEANNOUNCEMENT',payload:response.data})
   
      
    }).catch((error)=>{
      console.log(error);
    })
   
    }
  return (
    <div className="single-card">
      <Card style={{ borderRadius: "25px" }} className="card-content">
        <Card.Header className="header" style={{ borderRadius: "25px" }}>
          <div className="d-flex justify-content-between">
            <Card.Title>
              <h5>{moment(announcement.createdAt).format("LL")}</h5>
            </Card.Title>
            <div className="btns">
              <EditAnnouncement announcement={announcement} />
              <Button className="dlt-btn" onClick={handledelete}>
                Delete
              </Button>
            </div>
          </div>
          <Card.Title>
            <h4>{announcement.heading}</h4>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>{announcement.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Announcement;
