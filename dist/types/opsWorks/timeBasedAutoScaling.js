"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TimeBasedAutoScaling extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::TimeBasedAutoScaling', properties, dependsOn);
    }
}
exports.default = TimeBasedAutoScaling;