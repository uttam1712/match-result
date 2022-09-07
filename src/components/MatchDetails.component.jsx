import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

const BASE_URL = process.env.BASE_URL;

const MatchDetail = () => {
    const [matchData, setMatchData] = useState({});
    const navigator = useNavigate();

    let { imageUrl, team1, team2, winner, date } = matchData;

    date = moment(date).format("L");

    const { id } = useParams();

    const fetchMatchData = async () => {
        const { data } = await axios.get(`${BASE_URL}/${id}`);

        setMatchData(data.match);
    };

    const handleDelete = async () => {
        const ans = window.confirm("Are you sure want to delete this match ?");

        if (ans) {
            await axios.delete(`${BASE_URL}/${id}`);
            alert(`${team1} vs ${team2} match deleted`);
            navigator(-1);
        }
    };

    const handleEdit = async () => {
        navigator(`../../editMatch/${id}`, { replace: true });
    };

    useEffect(() => {
        fetchMatchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center my-10">
            <div className="flex justify-between p-5 gap-x-10">
                <div>
                    <img
                        src={imageUrl}
                        alt="team image"
                        className="w-[500px]"
                    />
                </div>
                <div className="text-white">
                    <div className="mb-5">
                        <p className="text-2xl text-blue-300">Team 1</p>
                        <h2 className="font-bold text-5xl">{team1}</h2>
                    </div>
                    <div className="mb-5">
                        <p className="text-2xl text-blue-300">Team 2</p>
                        <h2 className="font-bold text-5xl">{team2}</h2>
                    </div>
                    <div className="mb-5">
                        <p className="text-2xl text-blue-300">Winner 🌟</p>
                        <h2 className="font-bold text-5xl">{winner}</h2>
                    </div>
                    <div className="mb-5">
                        <p className="text-2xl text-blue-300">Match Date</p>
                        <h2 className="font-bold text-5xl">{date}</h2>
                    </div>
                </div>
            </div>
            <div className="w-[30%] flex justify-between">
                <button
                    onClick={handleEdit}
                    className="px-10 rounded-lg py-3 mx-2 font-semibold bg-green-400"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="px-10 rounded-lg py-3 mx-2 font-semibold bg-red-400"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MatchDetail;
