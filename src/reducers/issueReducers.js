
const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action)=>{
   switch(action.type){
    case"listIssues":
      return action.payload;

    case "fetchIssue":
      return [...state, action.payload];
   }

   return state;
}