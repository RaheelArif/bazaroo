import React from 'react';
import ios from './ios.png';
import android from './android.png';

export default function GetAppArea() {
    return (
        <div className="get-app-area col-lg-11 col-md-12 col">
            <div className="col-lg-5 loc-xl-4 col-md-4 col-sm-10 app-img-a">
                img
            </div>
            <div className="col-lg-6 loc-xl-5 col-md-8 col-sm-10 app-txt-a">
                <h1 className="app-title">Get Bazaaroo App Soon!</h1>
                <div className="app-p">Get Bazaaroo App Soon from Google Play & App Store. By using this App you can Easily Locate Boutiques, Browse Products & Buy.</div>
                 <div className="app-link-img-a">
                 <img src={ios} alt="ios"/>
                 <img src={android} alt="android"/>
                 </div>
           
            </div>

        </div>
    )
} 