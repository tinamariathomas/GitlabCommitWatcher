import * as React from "react";
import {Table} from "semantic-ui-react";

interface ICommitListProps{
    commits: Array<Commit>;
    onFetchCommits: () => void;
}

interface Commit{
    message: string;
    author_name: string;
}

export default class CommitsList extends React.Component<ICommitListProps,any> {
    constructor(props){
        super(props);
        this.props.onFetchCommits();
    }
    render() {
        return  <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>CommitMessage</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {this.commits()}
                </Table>;
    }
    commits(){
        return this.props.commits.map(commit =>
        <Table.Row>
            <Table.Cell>{commit.author_name}</Table.Cell>
            <Table.Cell>{commit.message}</Table.Cell>
        </Table.Row>)
    };
}