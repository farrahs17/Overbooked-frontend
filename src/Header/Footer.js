import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="text-muted footer font-small pt-3 mt-5 ">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} {""}
          <Link className="text-light" to="/">
            Overbooked.com
          </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
