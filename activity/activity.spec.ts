import { it, describe, expect } from 'vitest';
import { db } from './db.js';
import { parser } from './parser.js';
//import { relativeRadius, closedRoundCurve } from './renderer.js';
import { Diagram } from '../../Diagram.js';
import mermaidAPI from '../../mermaidAPI.js';

const {
    clear,
    getDiagramTitle,
    getAccTitle,
    getAccDescription,
    getConfig,
    getStart,
    getArrows,
    getStates,
    getEnd,
} = db;

describe('activity diagrams', () => {
    beforeEach(() => {
        clear();
    });
    
})