import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.BASE_URL;

const defaultFormFields = {
    team1: "",
    team2: "",
    winner: "",
    date: "",
    imageUrl: ""
};

const Form = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { team1, team2, winner, date, imageUrl } = formFields;

    const navigator = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${BASE_URL}`, formFields);

        navigator("/allMatches");

        resetFormFields();
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    return (
        <div className="flex items-center justify-center my-10">
            <form
                encType="multipart/form-data"
                className="w-[33%]"
                onSubmit={handleSubmit}
            >
                <label className="text-gray-400 text-2xl mt-2">Team 1</label>
                <input
                    type="text"
                    placeholder="Team 1 name"
                    name="team1"
                    value={team1}
                    onChange={changeHandler}
                    className="p-2 px-4 rounded-xl w-full my-2"
                    required
                />
                <label className="text-gray-400 text-2xl mt-2">Team 2</label>
                <input
                    type="text"
                    placeholder="Team 2 name"
                    name="team2"
                    value={team2}
                    onChange={changeHandler}
                    className="p-2 px-4 rounded-xl w-full my-2"
                    required
                />
                <label className="text-gray-400 text-2xl mt-2">Winner</label>
                <input
                    type="text"
                    placeholder="who is winner"
                    name="winner"
                    value={winner}
                    onChange={changeHandler}
                    className="p-2 px-4 rounded-xl w-full my-2"
                    required
                />
                <label className="text-gray-400 text-2xl mt-2">Date</label>
                <input
                    type="Date"
                    placeholder="Date"
                    name="date"
                    value={date}
                    onChange={changeHandler}
                    className="p-2 px-4 rounded-xl w-full my-2"
                    required
                />
                <label className="text-gray-400 text-2xl mt-2">Image URL</label>
                <input
                    type="text"
                    placeholder="https://myTeamImage.jpg"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={changeHandler}
                    className="p-2 px-4 rounded-xl w-full my-2"
                    required
                />

                <button
                    type="submit"
                    className="w-full mt-5 p-2 rounded-xl font-semibold bg-blue-500 text-white border-blue-500 border-2 focus:bg-blue-700 focus:border-blue-300 focus:border-2"
                >
                    Add Match
                </button>
            </form>
        </div>
    );
};

export default Form;
