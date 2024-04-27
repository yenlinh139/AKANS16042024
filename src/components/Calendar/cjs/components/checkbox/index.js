"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _Group = _interopRequireDefault(require("./Group"));
/**
 * @category Data Entry
 * @subcategory Checkbox
 * @component
 *
 * @example
import React from "react";
import { Page, Box, Checkbox } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Box>
                <Checkbox label="Label" />
            </Box>
            <Box>
                <Checkbox defaultChecked label="Label" />
            </Box>
            <Box>
                <Checkbox disabled label="Label" />
            </Box>
            <Box>
                <Checkbox defaultChecked disabled label="Label" />
            </Box>
        </Page>
    );
}
 * @example
import React from "react";
import { Page, Radio } from "zmp-ui";

function HomePage(props){
    return (
       <Page>
            <Checkbox.Group
                onChange={val => {
                    console.log(val);
                }}
                name="fruit"
                defaultValue="apple"
                options={[
                    { label: "Orange", value: "orange", disabled: true },
                    { label: "apple", value: "apple" },
                    { label: "Banana", value: "banana" },
                ]}
            />
       </Page>
    );
}
 *
 */
var Checkbox = _Checkbox.default;
Checkbox.Group = _Group.default;
var _default = exports.default = Checkbox;