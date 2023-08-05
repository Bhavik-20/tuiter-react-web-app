import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
	profileThunk,
	logoutThunk,
	updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
	const { currentUser } = useSelector((state) => state.user);
	const [profile, setProfile] = useState(currentUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const save = async () => {
		console.log("save");
		await dispatch(updateUserThunk(profile));
	};

	const loadProfile = async () => {
		console.log("loadProfile");
		try {
			const { payload } = await dispatch(profileThunk());
			console.log("loadProfile Payload: ", payload);
			setProfile(payload);
		} catch (error) {
			console.log("loadProfile Error: ", error);
		}
	};

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<div>
			<h1>Profile Screen</h1>
			{profile && (
				<div>
					<div>
						<label className="me-2">First Name</label>
						<input
							type="text"
							value={profile.firstName}
							onChange={(event) => {
								const newProfile = {
									...profile,
									firstName: event.target.value,
								};
								setProfile(newProfile);
							}}
						/>
					</div>
					<br></br>
					<div>
						<label className="me-2">Last Name</label>
						<input
							type="text"
							value={profile.lastName}
							onChange={(event) => {
								const newProfile = {
									...profile,
									lastName: event.target.value,
								};
								setProfile(newProfile);
							}}
						/>
					</div>
				</div>
			)}
			<br></br>
			<button
				className="me-3"
				onClick={() => {
					dispatch(logoutThunk());
					navigate("/tuiter/login");
				}}>
				Logout
			</button>
			<button onClick={save}>Save</button>
		</div>
	); // see below
}
export default ProfileScreen;
