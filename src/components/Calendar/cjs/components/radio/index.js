"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Radio = _interopRequireDefault(require("./Radio"));
var _Group = _interopRequireDefault(require("./Group"));
/**
 * @category Data Entry
 * @subcategory Radio
 * @component
 *
 * @example
import React from "react";
import { Page, Box, Radio } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Box>
                <Radio name="medium-1" value={1} label="Label" />
            </Box>
            <Box>
                <Radio
                    name="medium-2"
                    defaultChecked
                    value={2}
                    label="Label"
                />
            </Box>
            <Box>
                <Radio name="medium-3" disabled value={3} label="Label" />
            </Box>
            <Box>
                <Radio
                    name="medium-4"
                    defaultChecked
                    disabled
                    value={4}
                    label="Label"
                />
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
            <Radio.Group
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
 * @example
import React from "react";
import { Page, Radio } from "zmp-ui";

function HomePage(props){
    return (
       <Page>
        <Radio.Group name="fruit" defaultValue={"apple"}>
            <Box>
                <Radio value="apple">Apple</Radio>
            </Box>
            <Box>
                <Radio value="banana">Banana</Radio>
            </Box>
            <Box>
                <Radio value="orange">Orange</Radio>
            </Box>
        </Radio.Group>
       </Page>
    );
}
 */
var Radio = _Radio.default;
Radio.Group = _Group.default;
var _default = exports.default = Radio;