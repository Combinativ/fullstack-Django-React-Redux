const initialState = {
	token: localStorage.getItem("token"),
	isAuthtenticated: null,
	isLoading: false,
	user: null,
};
export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
