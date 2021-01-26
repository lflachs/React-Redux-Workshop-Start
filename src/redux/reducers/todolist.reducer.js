import { ADD_TODO, TOGGLE_DONE } from '../constants';

const initialState = [{ id: 0, title: 'Learn HTML', done: true }];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { id: state.length, title: action.title, done: false }];
		case TOGGLE_DONE:
			return state.map((task) => {
				if (task.id === action.taskId) {
					return { ...task, done: !task.done };
				} else {
					return task;
				}
			});
		default:
			return state;
	}
};

export default reducer;
