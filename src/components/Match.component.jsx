import { Link } from "react-router-dom";

const Match = ({ match }) => {
    const { _id, imageUrl, team1, team2 } = match;

    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure>
                <img src={imageUrl} alt="team image" />
            </figure>
            <div className="card-body flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                    <h2 className="card-title text-2xl">{team1}</h2>
                    <div className="badge bg-orange-500 my-2">VS</div>
                    <h2 className="card-title text-2xl">{team2}</h2>
                </div>

                <Link to={`${_id}`}>
                    <button className="p-2 bg-blue-600 rounded-lg font-bold text-white hover:bg-blue-500">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Match;
