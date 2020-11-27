import { ADD_CMP, ADD_PANEL, RM_CMP } from "./action";

const init = JSON.parse(localStorage.getItem('componentList')) || { general: [], panels:[], selectedPanel: '' };


const addPaneltoLayout = (state, action) => {
    const { panels } = state;
    let _panels = [...panels];
    _panels.push(action.payload)
    return {...state, panels: _panels}
}

export default function reducer(state, action) {
    switch (action.type) {
        case ADD_PANEL:
          return addPaneltoLayout(state, action);
        case ADD_CMP:
          return state;
        case RM_CMP:
            return state;
        default:
            return state
    }
}