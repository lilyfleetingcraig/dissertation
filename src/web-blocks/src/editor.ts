/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import { htmlBlocks, cssBlocks } from './blocks/blocks';
import { htmlForBlock } from './generators/html-block-generators';
import { cssForBlock } from './generators/css-block-generators';
import {
    workspaces,
    generators,
    getWorkspacesList,
    setWorkspace,
    WorkspaceType,
} from './workspaces';
import { toolbox as plainLanguageHtmlToolbox } from './toolboxes/plain-language/html';
import { toolbox as plainLanguageCssToolbox } from './toolboxes/plain-language/css';
import { webLanguageTheme } from './theme';
import {
    resizeBlocklyAreas,
    restoreSavedWidth,
    makeResizeHandlers,
} from './resize';
import { save, load, run } from './serialization';
import { toggleTab, restoreTab } from './controls';
import './editor.css';

const DEFAULT_VIEW_PANEL_TAB = 'preview';
const DEFAULT_CODE_PANEL_TAB = 'blockly-HTML-div';

// Register the blocks and generators with Blockly
Blockly.common.defineBlocks(htmlBlocks);
Blockly.common.defineBlocks(cssBlocks);
Object.assign(generators.html.forBlock, htmlForBlock);
Object.assign(generators.css.forBlock, cssForBlock);

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
    toolbox: plainLanguageHtmlToolbox,
    theme: webLanguageTheme,
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

setWorkspace(WorkspaceType.HTML, HTMLWorkspace);

const CSSWorkspace: Blockly.WorkspaceSvg = Blockly.inject(blocklyCSSDiv, {
    toolbox: plainLanguageCssToolbox,
    theme: webLanguageTheme,
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

setWorkspace(WorkspaceType.CSS, CSSWorkspace);

// Bind listeners
const { onMouseDown } = makeResizeHandlers(getWorkspacesList());

resizer.addEventListener('mousedown', onMouseDown);
window.addEventListener('resize', () =>
    resizeBlocklyAreas(getWorkspacesList())
);
document.addEventListener('DOMContentLoaded', () =>
    restoreSavedWidth(getWorkspacesList())
);

// Add change listeners to all workspaces.
for (const workspace of getWorkspacesList()) {
    workspace.addChangeListener((event: Blockly.Events.Abstract) => {
        // Skip UI events - only save on meaningful change.
        if (
            event.isUiEvent ||
            event.type == Blockly.Events.FINISHED_LOADING ||
            workspace.isDragging()
        ) {
            return;
        }
        run(workspaces);
        save(workspace);
    });
}

document.querySelectorAll<HTMLElement>('[data-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
        const panelId = tab.dataset.panel;
        const tabId = tab.dataset.tab;
        if (panelId && tabId) toggleTab(panelId, tabId, getWorkspacesList());
    });
});

// Finally perform function calls on page load.

document.addEventListener('DOMContentLoaded', () => {
    restoreTab('view-panel', DEFAULT_VIEW_PANEL_TAB, getWorkspacesList());
    restoreTab('code-panel', DEFAULT_CODE_PANEL_TAB, getWorkspacesList());
    restoreSavedWidth(getWorkspacesList());

    for (const workspace of getWorkspacesList()) {
        load(workspace);
    }

    run(workspaces);

    // Add icons to toolbox categories
    setTimeout(() => {
        addToolboxIcons();
    }, 100);
});

/**
 * Inject emoji icons dynamically to toolbox.
 */
const addToolboxIcons = function (): void {
    const iconMap: { [key: string]: string } = {
        Page: '📄',
        Text: '✏️',
        Style: '🎨',
    };

    document
        .querySelectorAll('.blocklyToolboxCategoryIcon')
        .forEach((iconSpan) => {
            const container = iconSpan.closest(
                '.blocklyTreeRowContentContainer'
            );
            if (container) {
                const label = container.querySelector(
                    '.blocklyToolboxCategoryLabel'
                );
                if (label) {
                    const categoryName = label.textContent?.trim();
                    const icon =
                        categoryName && iconMap[categoryName]
                            ? iconMap[categoryName]
                            : '•';
                    iconSpan.textContent = icon + ' ';
                }
            }
        });
};
