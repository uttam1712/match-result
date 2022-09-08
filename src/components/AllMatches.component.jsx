import { useEffect, useState } from "react";
import Match from "./Match.component";
import axios from "axios";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const AllMatches = () => {
    const [matchList, setMatchList] = useState([]);

    const fetchMatch = async () => {
        const { data } = await axios.get(`${REACT_APP_BASE_URL}`);
        setMatchList(data.matches);
    };

    useEffect(() => {
        fetchMatch();
    }, []);

    return (
        <div className="py-5 px-10 flex gap-x-3 gap-y-5 flex-wrap justify-center mx-auto w-full">
            {matchList.length > 0 ? (
                matchList.map((match) => (
                    <Match key={match._id} match={match} />
                ))
            ) : (
                <div className="mt-24 font-semibold text-6xl text-slate-500">
                    No Match Found
                </div>
            )}
        </div>
    );
};

export default AllMatches;
