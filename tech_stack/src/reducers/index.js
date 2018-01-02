import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	//libraries is an example of a reducer
	libraries: LibraryReducer
});