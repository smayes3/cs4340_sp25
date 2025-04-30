import { getConfig as commonGetConfig } from '../../config.js';
import type { ActivityDiagramConfig, RadarDiagramConfig } from '../../config.type.js';
import DEFAULT_CONFIG from '../../defaultConfig.js';
import { cleanAndMerge } from '../../utils.js';
import {
  clear as commonClear,
  getAccDescription,
  getAccTitle,
  getDiagramTitle,
  setAccDescription,
  setAccTitle,
  setDiagramTitle,
} from '../common/commonDb.js';
import type {
    //from activity langium:
    Start, 
    Arrow, 
    ActivityState, 
    End,
} from '../../../../parser/dist/src/language/generated/ast.js';
import type {
    //RadarAxis, RadarCurve, RadarOptions, RadarDB, RadarData
    ActivityStart, 
    ActivityArrow, 
    ActivityActivityState, 
    ActivityEnd, 
    ActivityDB, 
    ActivityData
} from './types.js'

const defaultActivityData: ActivityData = {
    starts: [],
    arrows: [],
    states: [],
    ends: [],
};

let data: ActivityData = structuredClone(defaultActivityData);

const DEFAULT_ACTIVITY_CONFIG: Required<ActivityDiagramConfig> = DEFAULT_CONFIG.activity;

const getConfig = (): Required<ActivityDiagramConfig> => {
    const config = cleanAndMerge({
        ...DEFAULT_ACTIVITY_CONFIG,
        ...commonGetConfig().activity,
    });
    return config;
};

const getStart = (): ActivityStart[] => data.starts;
const getArrows = (): ActivityArrow[] => data.arrows;
const getStates = (): ActivityActivityState[] => data.states;
const getEnd = (): ActivityEnd[] => data.ends;

const setStart = (starts: Start[]) => {
    data.starts = starts.map((startState) => {
        return {
            info: startState.info,
            label: startState.label ?? "",
        };
    });
};

const setArrows = (arrows: Arrow[]) => {
    data.arrows = arrows.map((arrow) => {
        return {
            info: arrow.info ?? "",
            label: arrow.label ?? ""
        };
    });
};

const setStates = (states: ActivityState[]) => {
    data.states = states.map((state) => {
        return {
            info: state.info ?? "",
            label: state.label ?? "",
        };
    });
};

const setEnd = (ends: End[]) => {
    data.ends = ends.map((endState) => {
        return {
            info: endState.info,
            label: endState.label ?? "",
        };
    });
};

const clear = () => {
    commonClear();
    data = structuredClone(defaultActivityData);
};

export const db: ActivityDB = {
    getConfig,
    getStart,
    getArrows,
    getStates,
    getEnd,
    setStart,
    setArrows,
    setStates,
    setEnd,
    clear,
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle,
    getAccDescription,
    setAccDescription,
};