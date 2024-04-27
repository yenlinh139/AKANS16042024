import React from "react";

export enum StoryStatus {
    seen = "seen",
    default = "default",
}

/**
 * @category Data Display
 * @subcategory Avatar
 * @displayName Avatar
 */
export interface AvatarProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    /**
     * Hiển thị trạng thái online của Avatar
     *
     * @default false
     */
    online?: boolean;
    /**
     * Nhận các giá trị: `default`, `seen`
     *
     * @type string
     */
    story?: keyof typeof StoryStatus;
    /** Kích thước avatar */
    size?: number;
    /** `src` cho thẻ `img` của avatar */
    src?: string;
    /**
     * Màu nền của avatar. Các giá trị hợp lệ bao gồm:
     *   - `BLUE-BLUELIGHT`: Màu xanh dương đậm
     *   - `PURPLE-BLUE`: Màu tím-xanh dương
     *   - `SKYBLUE-GREEN`: Màu xanh da trời nhạt-xanh lá cây
     *   - `GREEN-GREENLIGHT`: Màu xanh lá cây đậm-xanh lá cây nhạt
     *
     *   Nếu không được chỉ định trước và Avatar là string thì giá trị sẽ được tính toán trước dựa trên nội dung Avatar.
     */
    backgroundColor?:
        | "BLUE-BLUELIGHT"
        | "PURPLE-BLUE"
        | "SKYBLUE-GREEN"
        | "GREEN-GREENLIGHT";

    /**
     * Trạng thái block của avatar. Nếu có giá trị là true, avatar sẽ hiển thị trạng thái bị khóa.
     *
     * @default false
     */
    blocked?: boolean;

    /**
     * Callback được gọi khi người dùng nhấn chuột vào avatar.
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
}

export type GradientVariants = AvatarProps["backgroundColor"];

/**
 * @category Data Display
 * @subcategory Avatar
 * @displayName Avatar.Group
 *
 */
export interface AvatarGroupProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;

    /**
     * Số lượng avatar tối đa có thể hiển thị trong group.
     * Nếu như số lượng avatar trong group nhiều hơn `maxCounter`, phần tử cuối cùng trong group sẽ được hiển thị với nội dung `+x` (với `x` là số lượng avatar còn lại).

    * @default 3
     */
    maxCounter?: number;
    /**
     * Giả lập số lượng avatar trong group.
     * Ví dụ: bạn cần hiển thị 3 avatar đầu tiên, sau đó là `+997`, bạn có thể truyền vào `<Group total={1000} />` thay vì thật sự render 1000 `<Avatar>` để tối ưu performance.
     *
     * @default children.length
     */
    total?: number;
    /**
     * Hiển thị các avatar dưới dạng ngang. Mặc định các avatar trong group sẽ được hiển thị dưới dạng lưới, trừ khi số lượng nhiều hơn 4 avatar.
     *
     * @default false
     */
    horizontal?: boolean;
    /**
     * Callback được gọi khi người dùng nhấn chuột vào counter.
     * __Counter__ là phần tử cuối cùng trong group được hiển thị với nội dung`+x` (với x là số lượng avatar không thể hiển thị hết trong group).
     */
    onCounterClick?: React.MouseEventHandler<HTMLElement>;
}

export interface CompoundedComponent
    extends React.ForwardRefExoticComponent<
        AvatarProps & React.RefAttributes<HTMLDivElement>
    > {
    Group: React.FunctionComponent<AvatarGroupProps>;
}

declare const Avatar: CompoundedComponent;

export default Avatar;


