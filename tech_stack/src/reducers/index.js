import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	//libraries is an example of a reducer
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});