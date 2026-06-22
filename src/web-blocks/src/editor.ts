/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import { blocks } from './blocks/text';
import { forBlock } from './generators/javascript';
import { javascriptGenerator } from 'blockly/javascript';
import { toolbox } from './toolbox';
import {
    resizeBlocklyAreas,
    restoreSavedWidth,
    makeResizeHandlers,
} from './resize';
import { toggleTab, restoreTab } from './controls';
import './editor.css';

const DEFAULT_VIEW_PANEL_TAB = 'preview';
const DEFAULT_CODE_PANEL_TAB = 'blockly-HTML-div';

console.trace('editor.ts evaluated');

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

// Create the array of Blockly workspaces: HTML, CSS, etc
export const workspaces: Blockly.WorkspaceSvg[] = [];

// Set up UI elements and inject Blockly

const blocklyArea = document.getElementById('blockly-area');
const blocklyHTMLDiv = document.getElementById('blockly-HTML-div');
const blocklyCSSDiv = document.getElementById('blockly-CSS-div');
const resizer = document.getElementById('resizer');

if (!blocklyHTMLDiv) {
    throw new Error('Blockly HTML div not found');
}

if (!blocklyCSSDiv) {
    throw new Error('Blockly HTML div not found');
}

if (!blocklyArea) {
    throw new Error('Blockly area div not found');
}

if (!resizer) {
    throw new Error('Resizer not found');
}

const HTMLWorkspace: Blockly.WorkspaceSvg = Blockly.inject(blocklyHTMLDiv, {
    toolbox: toolbox,
    move: {
        scrollbars: {
            horizontal: true,
            vertical: true,
        },
        drag: true, // Allows the user to pan/drag the workspace
        wheel: false, // Optional: true to enable mouse wheel scrolling
    },
    zoom: {
        controls: true, // Show the +/- and zoom-to-fit buttons
        wheel: true, // Allow zooming with the mouse scroll wheel
        startScale: 1.0,
        maxScale: 3.0,
        minScale: 0.3,
        scaleSpeed: 1.2,
    },
});

workspaces.push(HTMLWorkspace);

const CSSWorkspace: Blockly.WorkspaceSvg = Blockly.inject(blocklyCSSDiv, {
    toolbox: toolbox,
    move: {
        scrollbars: {
            horizontal: true,
            vertical: true,
        },
        drag: true, // Allows the user to pan/drag the workspace
        wheel: false, // Optional: true to enable mouse wheel scrolling
    },
    zoom: {
        controls: true, // Show the +/- and zoom-to-fit buttons
        wheel: true, // Allow zooming with the mouse scroll wheel
        startScale: 1.0,
        maxScale: 3.0,
        minScale: 0.3,
        scaleSpeed: 1.2,
    },
});

workspaces.push(CSSWorkspace);

// Bind listeners
const { onMouseDown } = makeResizeHandlers(workspaces);

resizer.addEventListener('mousedown', onMouseDown);
window.addEventListener('resize', () => resizeBlocklyAreas(workspaces));
document.addEventListener('DOMContentLoaded', () =>
    restoreSavedWidth(workspaces)
);

document.querySelectorAll<HTMLElement>('[data-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
        const panelId = tab.dataset.panel;
        const tabId = tab.dataset.tab;
        if (panelId && tabId) toggleTab(panelId, tabId);
    });
});

// Finally perform function calls on page load

document.addEventListener('DOMContentLoaded', () => {
    restoreTab('view-panel', DEFAULT_VIEW_PANEL_TAB);
    restoreTab('code-panel', DEFAULT_CODE_PANEL_TAB);
    restoreSavedWidth(workspaces);
});
