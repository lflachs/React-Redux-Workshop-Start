import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todolist.action.js';

function App({ tasks, dispatch, addTodo }) {
	console.log(tasks);
	return (
		<div className='App'>
			<h1>Todolist App</h1>
			<ul>
				{tasks.map((task) => {
					return <li>{task.title}</li>;
				})}
			</ul>
			<button onClick={() => addTodo('Hello World')}>Click me</button>
		</div>
	);
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
		tasks: state.tasks,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (title) => dispatch(addTodo(title)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
