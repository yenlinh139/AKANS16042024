import ListItem from "./item";
import ListComponent from "./list";
/**
 * @category Data Display
 * @subcategory List
 * @component
 *
 * @typedef {object} List
 * @prop {array} [dataSource] - Mảng các giá trị cần hiển thị.
 * @prop {boolean} [loading] - Hiển thị loading
 * @prop {function} [renderItem] - Hàm render các giá trị trong `dataSource`.
 * @prop {boolean} [divider] - Ngăn cách các item
 * @prop {React.ReactNode} [children] 
 *
 * @example
import React from "react";
import { Page, List } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <List>
                <List.Item
                    title="title"
                    prefix={<Icon icon="zi-add-photo" />}
                    suffix={<Button icon={<Icon icon="zi-arrow-right" />} />}
                    brackets="brackets"
                    subTitle="subtitle"
                />
                <List.Item title="title" brackets="brackets" subTitle="subtitle" />
                <List.Item title="title" brackets="brackets" subTitle="subtitle" />
            </List>
        </Page>
    );
}
 */
var List = ListComponent;

/**
 *
 * @category Data Display
 * @subcategory List
 * @component
 * @typedef {object} List.Item
 * @prop {boolean} [visibilityToggle] - Hiển thị icon hiện hoặc ẩn password
 *
 */
List.Item = ListItem;
export default List;