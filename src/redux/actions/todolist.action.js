import { ADD_TODO } from '../constants';

export const addTodo = (title) => {
	return {
		type: ADD_TODO,
		title,
	};
};
