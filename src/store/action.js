export const ADD_PANEL = 'ADD_PANEL';
export const RM_PANEL = 'RM_PANEL';
export const DRG_PANEL = 'DRG_PANEL';

export const ADD_CMP = 'ADD_CMP';
export const RM_CMP = 'RM_CMP';
export const DRG_CMP = 'DRG_CMP';

export const addPanel = payload => ({ type: ADD_PANEL, payload });
export const removePanel = payload => ({ type: RM_PANEL, payload });
export const dragPanel = payload => ({ type: DRG_PANEL, payload });

export const addComponent = payload => ({ type: ADD_CMP, payload });
export const removeComponent = payload => ({ type: RM_CMP, payload });
export const dragComponent = payload => ({ type: DRG_CMP, payload });
