/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import { HtmlGenerator } from './generators/html-generator';
import { CssGenerator } from './generators/css-generator';
import { WebPreviewGenerator } from './generators/web-preview-generator';
import { CodePreviewGenerator } from './generators/code-preview-generator';

// Extend Blockly.WorkspaceSvg to include workspaceType property.
type TypedWorkspace = Blockly.WorkspaceSvg & {
    workspaceType?: WorkspaceType;
};

export const WorkspaceType = {
    HTML: 'html',
    CSS: 'css',
} as const;

export type WorkspaceType = (typeof WorkspaceType)[keyof typeof WorkspaceType];

export interface WorkspaceMap {
    html: Blockly.WorkspaceSvg | null;
    css: Blockly.WorkspaceSvg | null;
}

// Central workspace registry and generators.
export const workspaces: WorkspaceMap = {
    html: null,
    css: null,
};

// Code generators for each workspace type.
export const generators = {
    html: new HtmlGenerator(),
    css: new CssGenerator(),
};

// Preview generators for combining workspaces.
export const previewGenerators = {
    web: new WebPreviewGenerator(generators.html, generators.css),
    code: new CodePreviewGenerator(generators.html, generators.css),
};

/**
 * Returns list of all initialized workspaces (for functions that need array).
 * @returns {Blockly.WorkspaceSvg[]} Array of non-null workspaces.
 */
export function getWorkspacesList(): Blockly.WorkspaceSvg[] {
    return [workspaces.html, workspaces.css].filter(
        (ws): ws is Blockly.WorkspaceSvg => ws !== null
    );
}

/**
 * Retrieves a workspace by its type.
 * @param {WorkspaceType} type - The workspace type ('html' or 'css').
 * @returns {Blockly.WorkspaceSvg | null} The workspace instance or null if not initialized.
 */
export function getWorkspace(type: WorkspaceType): Blockly.WorkspaceSvg | null {
    return workspaces[type];
}

/**
 * Registers a workspace in the workspace map and attaches type metadata.
 * @param {WorkspaceType} type - The workspace type ('html' or 'css').
 * @param {Blockly.WorkspaceSvg} workspace - The workspace instance to register.
 * @returns {void}
 */
export function setWorkspace(
    type: WorkspaceType,
    workspace: Blockly.WorkspaceSvg
): void {
    workspaces[type] = workspace;
    (workspace as TypedWorkspace).workspaceType = type;
}

/**
 * Retrieves the code generator for a given workspace type.
 * @param {WorkspaceType} type - The workspace type ('html' or 'css').
 * @returns {HtmlGenerator | CssGenerator} The appropriate code generator instance.
 */
export function getGeneratorForType(type: WorkspaceType) {
    return generators[type];
}
