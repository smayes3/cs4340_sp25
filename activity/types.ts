import type { Start, Arrow, ActivityState, End } from '../../../../parser/dist/src/language/generated/ast.js';
import type { ActivityDiagramConfig } from '../../config.type.js';
import type { DiagramDBBase } from '../../diagram-api/types.js';
import { info } from '../info/infoDetector.js';

//RadarAxis, RadarCurve, RadarOptions
// ActivityStart, ActivityArrow, ActivityActivityState, ActivityEnd, ActivityDB, ActivityData
export interface ActivityStart {
    info: string;
    label: string;
}

export interface ActivityArrow {
    info: string;
    label: string;
}

export interface ActivityActivityState {
    info: string;
    label: string;
}

export interface ActivityEnd {
    info: string;
    label: string;
}

export interface ActivityDB extends DiagramDBBase<ActivityDiagramConfig> {
    getStart: () => ActivityStart[];
    getArrows: () => ActivityArrow[];
    getStates: () => ActivityActivityState[];
    getEnd: () => ActivityEnd[];
    setStart: (starts: Start[]) => void;
    setArrows: (arrows: Arrow[]) => void;
    setStates: (states: ActivityState[]) => void;
    setEnd: (ends: End[]) => void;
}

export interface ActivityData {
    starts: ActivityStart[];
    arrows: ActivityArrow[];
    states: ActivityActivityState[];
    ends: ActivityEnd[];
}