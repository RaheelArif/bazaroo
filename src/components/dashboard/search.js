import React from "react";
export default function Search() {
    return (
        <div className="search-area">
            <h1 className="search-heading">BAZAAROO!</h1>
            <p className="search-p">UK's Nationwide Virtual Platform Provider of Boutiques</p>
            <div className="search-s-a row">
                <input placeholder="Enter Post Code.." className=" col-md-7 col-xs-5 col-lg-5 col-xl-4 col-sm-8 search-s" type="text" />
            <button className="col-1 col-md-2 col-lg-1 col-sm-2 col-xs-2.5 ">search</button>
            </div>
        </div>
    )
}
