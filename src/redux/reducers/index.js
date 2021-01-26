import { combineReducers } from 'redux';
import todolistReducer from './todolist.reducer';
import uiThemeReducer from './uiTheme.reducer';
export default combineReducers({
	tasks: todolistReducer,
	uiTheme: uiThemeReducer,
});
