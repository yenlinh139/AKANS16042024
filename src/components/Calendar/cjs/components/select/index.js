"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Option = _interopRequireDefault(require("./Option"));
var _OtpGroup = _interopRequireDefault(require("./OtpGroup"));
var _Select = _interopRequireDefault(require("./Select"));
/**
 * @category Form
 * @subcategory Select
 * @component
 *
 * @typedef {object} Select
 *
 * @example
import React from "react";
import { Select } from "zmp-ui";
const { OtpGroup, Option } = Select;

export default () => {
    return (
        <Select
            label="Label"
            helperText="Helper text"
            placeholder="Placeholder"
            defaultValue="1"
            >
                <OtpGroup label="Group 1">
                    <Option value="1" title="Option 1" />
                    <Option value="2" title="Option 2" />
                </OtpGroup>
                <OtpGroup label="Group 2">
                    <Option value="3" title="Option 3" />
                    <Option value="4" title="Option 4" />
                    <Option value="5" title="Option 5" disabled />
                    <Option value="6" title="Option 6" />
                </OtpGroup>
            </Select>
        )
 }
* @example
import React from "react";
import { Select } from "zmp-ui";
const { OtpGroup, Option } = Select;

export default () => {
    return (
        <Select
            label="Label"
            helperText="Helper text"
            placeholder="Placeholder"
            multiple
            defaultValue={[]}
            >
                <Option value="1" title="Option 1" />
                <Option value="2" title="Option 2" />
                <Option value="3" title="Option 3" />
                <Option value="4" title="Option 4" />
                <Option value="5" title="Option 5" disabled />
                <Option value="6" title="Option 6" />
            </Select>
        )
}
 */

var Select = _Select.default;

/**
 *
 * @category Data Display
 * @subcategory List
 * @component
 * @typedef {object} List.Item
 * @prop {boolean} [visibilityToggle] - Hiển thị icon hiện hoặc ẩn password
 *
 */
Select.Option = _Option.default;
Select.OtpGroup = _OtpGroup.default;
var _default = exports.default = Select;