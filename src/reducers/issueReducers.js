const INITIAL_STATE = {
    issues: [],
    pagination: ""
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "listIssues":
            return {
                ...state,
                issues: action.payload.data,
                pagination: action.payload.headers.link
            };
        case "fetchIssue":
            return {...state, issue:action.payload };

        case "changeFilter":
            return {...state, issues:action.payload };
    }

    return state;
};