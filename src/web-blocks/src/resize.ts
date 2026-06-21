import * as Blockly from 'blockly';
import { workspaces } from './editor';

const VIEW_PANEL_WIDTH_STORAGE_KEY: string = 'view-panel-width';
const MIN_PANEL_WIDTH: number = 300;

let isResizingActive: boolean = false;

const blocklyArea: HTMLElement | null = document.getElementById('blockly-area');
const resizer: HTMLElement | null = document.getElementById('resizer');
const viewPanel: HTMLElement | null = document.getElementById('view-panel');

if (!blocklyArea) {
    throw new Error('Blockly area div not found');
}

if (!resizer) {
    throw new Error('Resizer not found');
}

if (!viewPanel) {
    throw new Error('View panel not found');
}

/**
 * Saves the current view panel width as a ratio of its container to localStorage.
 */
const savePanelWidth = function (): void {
    const containerWidth: number = viewPanel.parentElement!.offsetWidth;
    if (containerWidth === 0) return;
    const ratio: number =
        parseFloat(viewPanel.style.flexBasis) / containerWidth;
    if (Number.isFinite(ratio))
        localStorage.setItem(VIEW_PANEL_WIDTH_STORAGE_KEY, String(ratio));
};

/**
 * Reads the saved width ratio from localStorage.
 * @returns The saved ratio as a number between 0 and 1, or null if unset or invalid.
 */
const loadPanelWidth = function (): number | null {
    const stored = localStorage.getItem(VIEW_PANEL_WIDTH_STORAGE_KEY);
    if (stored === null) return null;
    const ratio = Number(stored);
    return Number.isFinite(ratio) && ratio > 0 && ratio < 1 ? ratio : null;
};

/**
 * Sets the view panel to the given pixel width then resizes blockly workspaces.
 * @param width - The desired panel width in pixels.
 */
const applyPanelWidth = function (width: number): void {
    viewPanel.style.flexBasis = `${width}px`;
    resizeBlocklyAreas();
};

/**
 * Loads the saved width ratio and applies it relative to the current container width.
 */
const restoreSavedWidth = function (): void {
    const ratio = loadPanelWidth();
    if (ratio === null) return;
    const containerWidth = viewPanel.parentElement!.offsetWidth;
    applyPanelWidth(ratio * containerWidth);
};

/**
 * Resizes all Blockly workspace divs to match the allocated editor area.
 */
export const resizeBlocklyAreas = function (): void {
    if (!blocklyArea) return;

    let x: number = 0;
    let y: number = 0;
    let element: HTMLElement | null = blocklyArea;

    while (element) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent as HTMLElement | null;
    }

    for (const workspace of workspaces) {
        const div = workspace.getInjectionDiv().parentElement;
        if (!div) continue;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.style.width = `${blocklyArea.offsetWidth}px`;
        div.style.height = `${blocklyArea.offsetHeight}px`;
        Blockly.svgResize(workspace);
    }
};

/**
 * Resize panels relative to each other, with minimum area on either editor pane.
 * @param event - The mousemove event from the document listener.
 */
const resizeTrigger = function (event: MouseEvent): void {
    if (isResizingActive) {
        const container = viewPanel.parentElement!;
        const maxWidth =
            container.offsetWidth - resizer.offsetWidth - MIN_PANEL_WIDTH;
        const containerLeft: number = container.getBoundingClientRect().left;
        const newWidth: number = Math.max(
            MIN_PANEL_WIDTH,
            Math.min(event.clientX - containerLeft, maxWidth)
        );
        viewPanel.style.flexBasis = `${newWidth}px`;
    }
    resizeBlocklyAreas();
};

/**
 * Stop resizing - saves the final panel width, and cleans up listeners.
 */
const stopResizeTrigger = function (): void {
    isResizingActive = false;
    savePanelWidth();
    document.removeEventListener('mousemove', resizeTrigger);
    document.removeEventListener('mouseup', stopResizeTrigger);
};

// Bind listeners

resizer.addEventListener('mousedown', () => {
    isResizingActive = true;
    document.addEventListener('mousemove', resizeTrigger);
    document.addEventListener('mouseup', stopResizeTrigger);
});

// Restore saved width after all content successfully loaded
document.addEventListener('DOMContentLoaded', restoreSavedWidth);
