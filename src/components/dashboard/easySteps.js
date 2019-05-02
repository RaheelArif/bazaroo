import React from "react";
import location from './location.png';
import GetAppArea from "./getAppArea";

export default function EasySteps() {
    return (
        <div className="easy-stp-bg">
            <div className="easy-step-a ">
                <p className="easy-step-h">ENJOY VIRTUAL SHOPPING IN 3 EASY STEPS</p>
                <div className="easy-imgs-a col-md-10 col-lg-10 col-xl-9 col-sm-12">
                    <div className="col-xl-4 col-lg-4 col-md-11 col-sm-12">
                        <div className="easy-img   ">
                            <img src={location} width="130px" height="130px" alt="location" />
                            <p className="easy-img-p">LOCATE</p>
                            <p className="easy-img-p2">Find Various Boutiques Easily.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-11 col-sm-12">
                        <div className="easy-img ">
                            <img src={location} width="130px" height="130px" alt="location" />
                            <p className="easy-img-p">BROWSE</p>
                            <p className="easy-img-p2">View Products and It's Details.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-11 col-sm-12">
                        <div className="easy-img ">
                            <img src={location} width="130px" height="130px" alt="location" />
                            <p className="easy-img-p">BUY</p>
                            <p className="easy-img-p2">Get Delivery at your Door Step.</p>
                        </div>
                    </div>
                </div>
            </div>
          
          <GetAppArea />

        </div>
    )
}