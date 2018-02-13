import axios from 'axios'
export const listIssues = ()=> async dispatch=> {
  const response = await axios.get('https://api.github.com/repos/facebook/react/issues');

  dispatch({
    type:"listIssues",
    payload:response.data
  });

}

export const fetchIssue = (issueNumber)=> async dispatch=>{
    const response = await axios.get(`https://api.github.com/repos/facebook/react/issues/${issueNumber}`);

    dispatch({
        type:'fetchIssue',
        payload:response.data
    });
}