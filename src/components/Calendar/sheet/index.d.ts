import React, { ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * @category Feedback
 * @subcategory Sheet
 * @displayName SheetRef
 */
export interface SheetRef {
    /**
     * Hàm dùng để snap đến một snap point đã khai báo. Xem thêm về {@link SheetProps.snapPoints snapPoints}  của `Sheet`.
     */
    snapTo?: (snapPoint: number) => void;
    /**
     * Trỏ đến phần tử của sheet trên cây DOM
     */
    sheet?: HTMLDivElement;
}

/**
 * @category Feedback
 * @subcategory Sheet
 * @displayName Sheet
 *
 */
export interface SheetProps {
    className?: string;
    style?: React.CSSProperties;
    /**
     * Mask là một lớp overlay màu xám được phủ lên các thành phần bên dưới hộp thoại của picker, ngăn không cho người dùng tương tác với các nội dung đó và tập trung vào hộp thoại được mở.
     *
     * @default true
     */
    mask?: boolean;
    /**
     * Callback được gọi sau khi sheet được đóng.
     */
    afterClose?: () => void;
    /**
     * Callback được gọi khi người dùng yêu cầu đóng sheet. Cần phải cập nhật lại giá trị của `visible` nếu có truyền vào trong callback này.
     */
    onClose?: (e: React.SyntheticEvent) => void;
    /**
     * Cho phép tự động đóng sheet khi click vào mask.
     *
     * @default true
     */
    maskClosable?: boolean;
    /**
     * Trạng thái mở hay đóng của sheet.
     *
     * Cần phải sử dụng cùng với `onClose` để cập nhật lại giá trị của `visible` khi người dùng yêu cầu đóng sheet, nếu không sheet sẽ không đóng được.
     *
     * @default false
     */
    visible?: boolean;
    /**
     * Tiêu đề của sheet, hiển thị ở phía trên cùng.
     */
    title?: string;
    /**
     * Inline style của sheet.
     */
    modalStyle?: React.CSSProperties;
    /**
     * Inline style của mask.
     */
    maskStyle?: React.CSSProperties;
    /**
     * CSS class của sheet.
     */
    modalClassName?: string;
    /**
     * CSS class của mask.
     */
    maskClassName?: string;
    /**
     * Chiều rộng của sheet. Nếu không thiết lập, sheet sẽ có chiều rộng mặc định là toàn màn hình.
     */
    width?: string | number;
    /**
     * Chiều cao của sheet. Nếu không thiết lập, sheet sẽ có chiều cao mặc định theo nội dung.
     */
    height?: string | number;
    /**
     * Nội dung cần được hiển thị bên trong bottom sheet.
     */
    children?: React.ReactNode;
    /**
     * Độ sâu của sheet, dùng để xác định thứ tự hiển thị của sheet đối với các phần tử lơ lửng khác nếu có.
     */
    zIndex?: number;
    /**
     * Sheet handler là một thanh màu đen nằm ngang ở phía trên cùng của sheet, dùng để kéo sheet lên hoặc xuống.
     *
     * @default true
     */
    handler?: boolean;
    /**
     * Tự động điều chỉnh chiều cao của sheet theo nội dung.
     *
     * @default false
     */
    autoHeight?: boolean;
    /**
     * Tham chiếu đến phần tử chứa nội dung của sheet trên cây DOM.
     */
    contentRef?: React.MutableRefObject<HTMLDivElement>;
    /**
     * Cho phép người dùng đóng sheet bằng thao tác vuốt xuống trên nội dung của sheet.
     * @default true
     */
    swipeToClose?: boolean;
    /**
     * Khai báo các snap points của sheet. Snap points là các điểm mà tại đó sheet sẽ dừng lại khi người dùng kéo lên hoặc xuống. Số lượng snap points là không giới hạn.
     *
     * Mỗi snap point có giá trị từ 0 với 1 với 0 là khi sheet hoàn toàn mở và 1 là khi sheet hoàn toàn đóng. Bên cạnh truyền snap point dưới dạng một số cố định, các hàm để tính toán các snap points dựa trên chiều cao của sheet cũng có thể được truyền vào.
     *
     * Không giới hạn số lượng snap points.
     */
    snapPoints?: (props: { sheetModalHeight: number }) => number[] | number[];
    /**
     * Snap point mặc định khi mở sheet. Giá trị được truyền vào dưới dạng index trong mảng `snapPoints`.
     */
    defaultSnapPoint?: number;
    /**
     * Callback được gọi khi sheet được snap đến một snap point mới.
     */
    onSnap?: (snapPoint: number) => void;
    /**
     * Tham chiếu đến sheet.
     *
     * @type SheetRef
     */
    ref?: SheetRef;
    /**
     * Mặc định khi người dùng đóng sheet, giao diện của nó vẫn còn được render trong DOM và chỉ bị ẩn đi. Thiết lập này cho phép gỡ sheet ra khỏi cây DOM hoàn toàn sau khi đóng.
     *
     * Thiết lập này có thể giúp giảm bộ nhớ được sử dụng trong trường hợp sheet có nội dung lớn. Tuy nhiên, khi sheet được mở lại, tất cả nội dung sẽ phải render lại từ đầu.
     *
     * @default false
     */
    unmountOnClose?: boolean;
}

export interface SheetContentProps extends SheetProps {
    /**
     * Tiêu đề của sheet, hiển thị ở phía trên cùng.
     */
    title?: string;
    /**
     * Nội dung cần được hiển thị bên trong bottom sheet.
     */
    children?: React.ReactNode;
    ariaId?: string;
    /**
     * Callback được gọi khi trạng thái hiển thị của sheet thay đổi.
     */
    onVisibleChanged?: (visible: boolean) => void;
    onMouseDown?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    /**
     * Tham chiếu đến phần tử chứa nội dung của sheet trên cây DOM.
     */
    modalRef?: React.MutableRefObject<HTMLDivElement>;
}

/**
 * @category Feedback
 * @subcategory Sheet
 *
 * @typedef {object} ActionButton
 *
 */
export interface ActionButton {
    /**
     * Chữ trên nút action.
     */
    text: string;
    /**
     * Inline style của nút action.
     */
    style?: React.CSSProperties;
    /**
     * CSS class của nút action.
     */
    className?: string;
    /**
     * Hiển thị action dưới dạng nút highlight
     *
     * @default false
     */
    highLight?: boolean;
    /**
     * Hiển thị action dưới dạng nút danger
     *
     * @default false
     */
    danger?: boolean;
    /**
     * Callback được gọi khi người dùng click vào action.
     */
    onClick?: (e: React.MouseEvent) => void;
    /**
     * Action này chỉ định việc đóng sheet khi được click
     *
     * @default false
     */
    close?: boolean;
    /**
     * Trạng thái vô hiệu hoá của action.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Key định danh của action.
     */
    key?: string;
}

/**
 * Bao gồm các props của Sheet trừ `handler`
 * @category Feedback
 * @subcategory Sheet
 * @displayName Sheet.Action
 *
 */
export interface ActionSheetProps
    extends Omit<
        SheetProps,
        "handler" | "ref" | "snapPoints" | "defaultSnap" | "onSnap"
    > {
    /**
     * Hiển thị viền phân cách giữa các nút action
     *
     * @default false
     */
    divider?: boolean;
    /**
     * Mảng thiết lập các nút action. Có thể nhóm các action lại với nhau bằng cách khai báo nhiều mảng action, với các action liên quan nằm trong cùng một mảng.
     *
     * @type ActionButton
     */
    actions?: ActionButton[] | ActionButton[][];
    /**
     * Hiển thị viền phân cách giữa các nhóm action
     *
     * @default false
     */
    groupDivider?: boolean;
}

export interface CompoundedComponent
    extends ForwardRefExoticComponent<
        SheetProps & RefAttributes<HTMLDivElement>
    > {
    Actions: ForwardRefExoticComponent<
        ActionSheetProps & RefAttributes<HTMLDivElement>
    >;
}

declare const Sheet: CompoundedComponent;

export default Sheet;


