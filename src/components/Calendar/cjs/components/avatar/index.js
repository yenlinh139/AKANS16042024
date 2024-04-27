"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _avatar = _interopRequireDefault(require("./avatar"));
var _group = _interopRequireDefault(require("./group"));
exports.Group = _group.default;
/**
 * @category Data Display
 * @subcategory Avatar
 * @component
 *
 * @example
import React from "react";
import { Page, Avatar } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Avatar size={98} online story="default">
                D
            </Avatar>
        </Page>
    );
}
 * @example
import React from "react";
import { Page, Avatar } from "zmp-ui";

function HomePage(props){
    return (
       <Page>
            <Avatar.Group maxCounter={1}>
                <Avatar story="default" online>A</Avatar>
                <Avatar story="seen" online>B</Avatar>
                <Avatar story="seen" online>c</Avatar>
                <Avatar story="seen" online>D</Avatar>
            </Avatar.Group>
       </Page>
    );
}
 *
 */
var Avatar = _avatar.default;
Avatar.Group = _group.default;
var _default = exports.default = Avatar;