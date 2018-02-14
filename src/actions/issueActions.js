import axios from "axios";
export const listIssues = (pageNumber) => async dispatch => {
  let response;
  if (!pageNumber) {
     response = await axios.get(
      "https://api.github.com/repos/facebook/react/issues"
    );
  } else {
    response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues?page=${pageNumber}`
    );
  }

  dispatch({
    type: "listIssues",
    payload: response
  });
};

export const fetchIssue = issueNumber => async dispatch => {
  const response = await axios.get(
    `https://api.github.com/repos/facebook/react/issues/${issueNumber}`
  );

  dispatch({
    type: "fetchIssue",
    payload: response.data
  });
};

export const changeFilter = value => async dispatch => {
  const response = await axios.get(
    `https://api.github.com/repos/facebook/react/issues?state=${value}`
  );
  dispatch({
    type: "changeFilter",
    payload: response.data
  });
};