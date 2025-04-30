import type { Diagram } from '../../Diagram.js';
import type { ActivityDiagramConfig } from '../../config.type.js';
import type { DiagramRenderer, DrawDefinition, SVG, SVGGroup } from '../../diagram-api/types.js';
import { selectSvgElement } from '../../rendering-util/selectSvgElement.js';
import { getConfigField } from '../architecture/architectureDb.js';
import { drawStartState } from '../state/shapes.js';
import { diagram } from './diagram.js';
import type { ActivityStart, ActivityArrow, ActivityActivityState, ActivityEnd, ActivityDB, ActivityData } from './types.js';

const draw: DrawDefinition = (_text, id, _version, diagram: Diagram) => {
    const db = diagram.db as ActivityDB;

    //get data
    const start = db.getStart();
    const arrows = db.getArrows();
    const end = db.getEnd();
    const states = db.getStates();
    const config = db.getConfig();
    const title = db.getDiagramTitle();
    const svg: SVG = selectSvgElement(id);

    //draw frame
    const g = drawFrame(svg, config);

    //numeric parsing
    const rawActivitySpacing = Number(getConfigField('activitySpacing'));
    const activitySpacing = isNaN(rawActivitySpacing) ? 20 : rawActivitySpacing;
    const rawFontSize = Number(getConfigField('fontSize'));
    const fontSize = isNaN(rawFontSize) ? 16 : rawFontSize;
    const rawPadding = Number(getConfigField('padding'));
    const padding = isNaN(rawPadding) ? 20 : rawPadding;

    //draw start state as filled in circle (d3 SVG)
    const startState = start[0];
    if (startState) {
        const startGroup = g.append('g').attr('class', 'activity-startState');
        startGroup.append('circle').attr('cx', 25).attr('cy', 25).attr('r', 25).attr('fill', '#d663cd');
        startGroup.append('text').text(startState.info).attr('x', 20).attr('y', 50).attr('text-anchor', 'middle').attr('font-size', fontSize);
    }

    //draw activity states as rounded unfilled rectangles
    let currentX = 50;
    let currentY = 50;
    states.forEach((state) => {
        //const container = g;
        const stateGroup = g.append('g').attr('class', 'activity-state');
        const textElem = stateGroup.append('text').text(state.info).attr('font-size', fontSize);
        //const bbox = (textElem.node() as SVGGraphicsElement).getBBox();
        //const boxWidth = bbox.width + padding;
        //const boxHeight = bbox.height + padding;
        //const cx = activityX + boxWidth/2;
        //const cy = currentY + boxHeight/2;

       // stateGroup.insert('rect','text').attr('width', 100).attr('height', 50).attr('rx', 15).attr('stroke','#000000').text(state.info).attr('x', activityX)

        stateGroup.append('rect').attr('width', currentX).attr('height', currentY).attr('rx', 15).attr('stroke','#000000');
        textElem.append('text').text(state.info).attr('x', currentX).attr('y', currentY).attr('text-anchor', 'middle').attr('font-size', fontSize);

        //update currentx
        currentX = currentX + 50;
    });















}