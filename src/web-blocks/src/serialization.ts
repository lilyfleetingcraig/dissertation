/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import { previewGenerators, type WorkspaceMap } from './workspaces';

const WORKSPACE_STORAGE_KEY_PREFIX: string = 'workspace-storage';
const PREVIEW_UPDATE_DELAY = 300; // milliseconds

const codeOutput = document.getElementById('code');
const previewOutput = document.getElementById('preview-content');

if (!codeOutput) {
    throw new Error('Code output div not found');
}

if (!previewOutput) {
    throw new Error('Preview content div not found');
}

// Debounce timer for preview updates
let previewUpdateTimer: ReturnType<typeof setTimeout> | null = null;

/**
 * Gets the storage key from the parent div of a workspace.
 * @param workspace Blockly workspace to save.
 */
const getStorageKey = function (
    workspace: Blockly.WorkspaceSvg
): string | null {
    const workspaceContainer = workspace.getInjectionDiv().parentElement;
    if (!workspaceContainer) return null;
    const workspaceId: string = workspaceContainer.id;
    return `${WORKSPACE_STORAGE_KEY_PREFIX}-${workspaceId}`;
};

/**
 * Saves the state of the workspace to browser's local storage.
 * @param workspace Blockly workspace to save.
 */
export const save = function (workspace: Blockly.WorkspaceSvg) {
    const workspaceContainer = workspace.getInjectionDiv().parentElement;
    if (!workspaceContainer) return;
    const workspaceId: string = workspaceContainer.id;
    const data = Blockly.serialization.workspaces.save(workspace);
    localStorage.setItem(
        `${WORKSPACE_STORAGE_KEY_PREFIX}-${workspaceId}`,
        JSON.stringify(data)
    );
};

/**
 * Loads saved state from local storage into the given workspace.
 * @param workspace Blockly workspace to load into.
 */
export const load = function (workspace: Blockly.WorkspaceSvg) {
    const workspaceStorageKey = getStorageKey(workspace);
    if (!workspaceStorageKey) return;

    const data = window.localStorage?.getItem(workspaceStorageKey);
    if (!data) return;

    // Don't emit events during loading.
    Blockly.Events.disable();
    Blockly.serialization.workspaces.load(
        JSON.parse(data),
        workspace,
        undefined
    );
    Blockly.Events.enable();
};

/**
 * Generates and outputs code from workspaces.
 * Updates both code view and web preview with debouncing.
 * @param workspaceMap Map of workspace types to their instances.
 */
export const run = function (workspaceMap: WorkspaceMap) {
    // Clear existing timer
    if (previewUpdateTimer !== null) {
        clearTimeout(previewUpdateTimer);
    }

    // Debounce the preview update
    previewUpdateTimer = setTimeout(() => {
        const codeOutputText: string =
            previewGenerators.code.generate(workspaceMap);
        const webOutputText: string =
            previewGenerators.web.generate(workspaceMap);

        codeOutput.innerHTML = codeOutputText;
        previewOutput.innerHTML = webOutputText;
    }, PREVIEW_UPDATE_DELAY);
};
