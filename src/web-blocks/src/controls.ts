import * as Blockly from 'blockly/core';

const SWITCHING_TAB_REFERENCE: string = '.switch-tab';
const TAB_STORAGE_KEY_PREFIX = 'active-tab';

/**
 * Saves the active tab for a panel to localStorage.
 * @param panelId - The id of the panel.
 * @param tabId - The id of the tab to save as active.
 */
const saveTab = (panelId: string, tabId: string): void => {
    localStorage.setItem(`${TAB_STORAGE_KEY_PREFIX}-${panelId}`, tabId);
};

/**
 * Loads the saved active tab id for a panel from localStorage.
 * @param panelId - The id of the panel.
 * @returns The saved tab id, or null if nothing is stored.
 */
const loadTab = (panelId: string): string | null =>
    localStorage.getItem(`${TAB_STORAGE_KEY_PREFIX}-${panelId}`);

/**
 * Restores the active tab for a panel from localStorage, with given default.
 * @param panelId - The id of the panel to restore.
 * @param defaultTabId - The id of the tab to show if no saved state is found.
 * @param workspaces - Optional array of Blockly workspaces to resize.
 */
export const restoreTab = (
    panelId: string,
    defaultTabId: string,
    workspaces?: Blockly.WorkspaceSvg[]
): void => {
    const savedTabId = loadTab(panelId);
    const tabExists =
        savedTabId && document.getElementById(savedTabId) !== null;
    toggleTab(panelId, tabExists ? savedTabId : defaultTabId, workspaces);
};

/**
 * Switches the visible tab within a panel by showing the target element
 * and hiding all sibling elements that share the same tab class.
 * @param panelId - The id of the panel containing the tabs.
 * @param targetTabId - The id of the tab element to make visible.
 * @param workspaces - Optional array of Blockly workspaces to resize.
 */
export const toggleTab = function (
    panelId: string,
    targetTabId: string,
    workspaces?: Blockly.WorkspaceSvg[]
): void {
    const panel: HTMLElement | null = document.getElementById(panelId);
    if (!panel) {
        return;
    }
    const tabs = panel.querySelectorAll<HTMLElement>(SWITCHING_TAB_REFERENCE);
    tabs.forEach((tab) => {
        tab.style.display = tab.id === targetTabId ? 'block' : 'none';
    });

    saveTab(panelId, targetTabId);

    // Resize Blockly workspaces if provided
    if (workspaces && workspaces.length > 0) {
        // Use requestAnimationFrame to ensure the DOM has been updated
        requestAnimationFrame(() => {
            // Import and call resizeBlocklyAreas dynamically to avoid circular dependency
            import('./resize').then((resizeModule) => {
                resizeModule.resizeBlocklyAreas(workspaces);
            });
        });
    }
};
