const ToggleReducer =(state={toggle:false}, action)=>{
    switch(action.type){        
        case "IS_TOGGLED": return {toggle: !state.toggle};
        default: return state;
    }
}
export default ToggleReducer;