import axios from 'axios';
import * as config from 'config';
var instance = axios.create({
    baseURL: `${config.get('gitlab.url')}/api/v4/`,
    headers: {'PRIVATE-TOKEN': config.get('gitlab.private_token')}
});

const commitsUrl = 'projects/1/repository/commits';
const getCommits = async () => {
    const commits = await instance.get(commitsUrl)
        .catch((err)=>{console.log("ERROR",err)})
    return commits;
};

export default getCommits;
