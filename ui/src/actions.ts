import axios from 'axios';


export const fetchCommits = async () =>  {
    const commits = await axios.get('http://localhost:3001/commits')
    return commits.data;

};
