import { connect } from 'react-redux';
import {fetchCommits} from '../actions';
import CommitsList from '../components/CommitsList'
import {FETCH_COMMITS_SUCCESS} from "../actionTypes";


const mapStateToProps = state => {
    return {
        commits: state.commits
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCommits: async () => {
            const commits = await fetchCommits();
            dispatch({type: FETCH_COMMITS_SUCCESS,
                commits});
        }
    }
};

const CommitsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommitsList);

export default CommitsListContainer