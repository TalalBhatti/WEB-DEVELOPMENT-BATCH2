// import React, { useState } from "react";
// import Logo from '../images/ncl-logo.jpg'
// import { Link } from "react-router-dom";

// const Main = (props) =>{
//     return(
//         <>
//         <img
//         src={Logo}
//         style={{width:"200px"}}
//         />
//         <h5>Greeting: {props.toSend}</h5>
//         <Link to="/first">To go on first page</Link>
//         </>
//     )
// }

// export default Main

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import Logo from '../images/ncl-logo.jpg'
import { Link } from "react-router-dom";

function Main() {
  return (
    <Container>
      <Row>
        <Col>        <img
        src={Logo}
        style={{width:"200px"}}
        /></Col>
        <Col>Practicing Bootstrap</Col>
        <Col><Link to="/first">To go on first page</Link>
</Col>
      </Row>
    </Container>
  );
}

export default Main;