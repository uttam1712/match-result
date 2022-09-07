import React from "react";

import { Link } from "react-router-dom";

const navItemStyle =
    "font-bold text-3xl bg-blue-200 p-5 rounded-xl hover:bg-blue-400 hover:text-white cursor-pointer";

const Navbar = () => {
    return (
        <div className="flex justify-around p-6 pt-24">
            <Link to="/addMatch">
                <div className={`${navItemStyle}`}>Add Match</div>
            </Link>

            <Link to="/allMatches">
                <div className={`${navItemStyle}`}>All Matches</div>
            </Link>
        </div>
    );
};

export default Navbar;
