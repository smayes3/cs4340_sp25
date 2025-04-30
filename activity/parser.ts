import type { Activity } from '@mermaid-js/parser';
import { parse } from '@mermaid-js/parser';
import type { ParserDefinition } from '../../diagram-api/types.js';
import { log } from '../../logger.js';
import { populateCommonDb } from '../common/populateCommonDb.js';
import { db } from './db.js';

const populate = (ast: Activity) => {
    populateCommonDb(ast, db);
    const { arrows, ends, starts, states } = ast;
    //here we can add specific logic between the AST and the DB
    db.setArrows(arrows);
    db.setEnd(ends);
    db.setStart(starts);
    db.setStates(states);
};

export const parser: ParserDefinition = {
    parse: async (input: string): Promise<void> => {
        const ast: Activity = await parse('activity', input);
        log.debug(ast);
        populate(ast);
    },
};