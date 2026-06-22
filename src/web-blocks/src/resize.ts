import * as Blockly from 'blockly';

const VIEW_PANEL_WIDTH_STORAGE_KEY: string = 'view-panel-width';
const MIN_PANEL_WIDTH: number = 300;

let isResizingActive: boolean = false;

const blocklyArea: HTMLElement | null = document.getElementById('blockly-area');
const resizer: HTMLElement | null = document.getElementById('resizer');
const viewPanel: HTMLElement | null = document.getElementById('view-panel');

if (!blocklyArea) throw new Error('Blockly area div not found');
if (!resizer) throw new Error('Resizer not found');
if (!viewPanel) throw new Error('View panel not found');

const savePanelWidth = function (): void {
    const containerWidth: number = viewPanel.parentElement!.offsetWidth;
    if (containerWidth === 0) return;
    const ratio: number =
        parseFloat(viewPanel.style.flexBasis) / containerWidth;
    if (Number.isFinite(ratio))
        localStorage.setItem(VIEW_PANEL_WIDTH_STORAGE_KEY, String(ratio));
};

const loadPanelWidth = function (): number | null {
    const stored = localStorage.getItem(VIEW_PANEL_WIDTH_STORAGE_KEY);
    if (stored === null) return null;
    const ratio = Number(stored);
    return Number.isFinite(ratio) && ratio > 0 && ratio < 1 ? ratio : null;
};

export const restoreSavedWidth = function (
    workspaces: Blockly.WorkspaceSvg[]
): void {
    const ratio = loadPanelWidth();
    if (ratio === null) return;
    const containerWidth = viewPanel.parentElement!.offsetWidth;
    const width = ratio * containerWidth;
    viewPanel.style.flexBasis = `${width}px`;
    resizeBlocklyAreas(workspaces);
};

export const resizeBlocklyAreas = function (
    workspaces: Blockly.WorkspaceSvg[]
): void {
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

const resizeTrigger = function (
    workspaces: Blockly.WorkspaceSvg[],
    event: MouseEvent
): void {
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
    resizeBlocklyAreas(workspaces);
};

export const makeResizeHandlers = (workspaces: Blockly.WorkspaceSvg[]) => {
    let boundMouseMove: ((e: MouseEvent) => void) | null = null;

    const onMouseUp = () => {
        isResizingActive = false;
        savePanelWidth();
        if (boundMouseMove)
            document.removeEventListener('mousemove', boundMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.body.classList.remove('resizing');
    };

    const onMouseDown = () => {
        isResizingActive = true;
        boundMouseMove = (e) => resizeTrigger(workspaces, e);
        document.addEventListener('mousemove', boundMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.body.classList.add('resizing');
    };

    return { onMouseDown };
};
