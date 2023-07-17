import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';


const store = configureStore({
	reducer: rootReducer,
	devtools: import.meta.DEV,
});

export default store;