/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodeGenerator } from 'blockly/core';

export class HtmlGenerator extends CodeGenerator {
    ORDER_ATOMIC = 0;
    ORDER_NONE = 999;

    constructor() {
        super('HTML');
    }
}

export const htmlGenerator = new HtmlGenerator();
