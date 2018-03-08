import {FETCH_COMMITS_REQUEST, FETCH_COMMITS_SUCCESS} from './actionTypes';
const initialState = {
  commits : [],
};
export default function GitWatcher(state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMITS_REQUEST:
            return state;
        case FETCH_COMMITS_SUCCESS:
            return Object.assign({}, state, {commits: action.commits});
        default:
            return state
    }
}