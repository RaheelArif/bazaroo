import React from "react";
import {Link} from "react-router-dom";
export default function Footer () {
    return(
        <div className="footer">
           <div >
           <Link className="f-link1" to="/">Terms and conditions</Link>
           <Link className="f-link2" to="/"> Privacy Policy</Link>
           </div>
           <div className="footer-detail">
           Copyright © 2019 Bazaaroo. All right reserved
           </div>
        </div>
    )
} 