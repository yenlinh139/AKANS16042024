"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _sheet = _interopRequireDefault(require("./sheet"));
var _actionSheet = _interopRequireDefault(require("./action-sheet"));
/**
 * Page component: Component wrapper nội dung trang
 *
 * @category Feedback
 * @subCategory Sheet
 * @component
 *
 * @example
import React from "react";
import { Page, Button, Sheet } from "zmp-ui";

function HomePage(props){
    const [sheetVisible, setSheetVisible] = useState(false);
    return (
        <Page>
            <Button onClick={() => {setSheetVisible(true)}}>Open Sheet</Button>
            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                title="Action Sheet"
            >
                Sheet content
            </Sheet>
        </Page>
    );
}
 * @example
import React from "react";
import { Page, Button, Sheet } from "zmp-ui";

function HomePage(props){
    const [sheetVisible, setSheetVisible] = useState(false);
    return (
        <Page>
            <Button onClick={() => {setSheetVisible(true)}}>Open Sheet</Button>
            <Sheet.Actions
                visible={sheetVisible}
                title="Action Sheet"
                onClose={() => setSheetVisible(false)}
                actions={[
                    [
                        {
                            text: "button",
                            onClick: () => {
                                alert("click");
                            },
                        },
                        { text: "button", highLight: true },
                    ],
                    [{ text: "cancel", close: true, danger: true }],
                ]}
            />
        </Page>
    );
}
 */
var Sheet = _sheet.default;
Sheet.Actions = _actionSheet.default;
var _default = exports.default = Sheet;