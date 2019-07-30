import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="text-muted footer font-small pt-3 mt-5 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <h5 className="title ">OverBooked</h5>
            <p>A mighty fine ticketing platform</p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Go To:</h5>
            <ul>
              <li className="list-unstyled">
                <Link className="text-light" to="/">
                  About
                </Link>
              </li>
              <li className=" list-unstyled">
                <Link className="text-light" to="/signup">
                  SignUp
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link className="text-light" to="/">
            OverBooked.com
          </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
