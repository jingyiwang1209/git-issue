import React from "react";
import { Link } from "react-router-dom";
import { calculateHourDiff } from "../utilities/utilities";

const IssueItem = props => {
    const { issue } = props;
    let state = props.issue.state === "open" ? "opend" : "closed";
    return (
        <li className="issue" key={issue.id}>
            <div className="issue-header">
                <Link className="issue-title" to={`/issue/${issue.number}`}>
                    {issue.title}{" "}
                </Link>
                <span className="issue-comment">
                    <Link to={issue.comments_url}>
                        {issue.comments > 1 ? (
                            issue.comments + " comments"
                        ) : (
                            ""
                        )}{" "}
                    </Link>
                </span>
            </div>
            <div>
                #{issue.number} {state} {calculateHourDiff(issue.created_at)}{" "}
                ago by {issue.user.login}{" "}
            </div>
        </li>
    );
};

export default IssueItem;