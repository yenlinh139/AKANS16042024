/* eslint-disable no-use-before-define */
import { CSSProperties, ReactNode } from "react";

/**
 * @category Feedback
 * @subcategory Snackbar
 * @enum {string}
 */
export enum SnackbarPosition {
    /**
     * Mở Snackbar phía trên
     */
    "top" = "top",
    /**
     * Mở Snackbar phía dưới
     */
    "bottom" = "bottom",
}

/**
 * @category Feedback
 * @subcategory Snackbar
 * @enum {string}
 */
export enum SnackbarType {
    /**
     * Snackbar mặc định
     */
    "default" = "default",
    /**
     * Snackbar dùng hiển thị khi thực hiện một tác vụ thành công
     */
    "success" = "success",
    /**
     * Snackbar dùng để hiển thị thông tin
     */
    "info" = "info",
    /**
     * Snackbar dùng để hiển thị phản hồi một tác vụ thực hiện bị lỗi
     */
    "error" = "error",
    /**
     * Snackbar dùng để đưa ra cảnh báo
     */
    "warning" = "warning",
    /**
     * Snackbar dùng để hiển thị trạng thái loading
     */
    "loading" = "loading",
    /**
     * Snackbar hiển thị tiến trình download
     */
    "download" = "download",
    /**
     * Snackbar hiển thị với countdown
     */
    "countdown" = "countdown",
    /**
     * Snackbar hiển thị khi network kết nối
     */
    "wifi-connected" = "wifi-connected",
    /**
     * Snackbar hiẻn thị khi network ngắt kết nối
     */
    "wifi-disconnected" = "wifi-disconnected",
}

/**
 * @category Feedback
 * @subcategory Snackbar
 * @displayName SnackbarProvider
 */
export interface SnackbarProps {
    /**
     * Inline style của snackbar
     */
    style?: CSSProperties;
    /**
     * CSS class của snackbar
     */
    className?: string;
    /**
     * Nội dung cần được hiển thị trong snackbar
     */
    children?: ReactNode;
    /**
     * Tuỳ chỉnh độ sâu của snackbar, sử dụng khi có nhiều phần tử overlay lên nhau.
     */
    zIndex?: number;
}

/**
 * @category Feedback
 * @subcategory Snackbar
 * @displayName SnackbarContext
 *
 * SnackbarProvider cung cấp các hooks
 */
export interface SnackbarContext {
    /**
     * Hàm để tạo mới và mở một Snackbar. Có thể mở Snackbar với các {@link SnackbarOptions}
     */
    openSnackbar: (options: SnackbarOptions) => void;
    /**
     * Hàm để đóng một Snackbar, có thể sử dụng để đóng nhanh khi chưa hết thời gian hiển thị.
     */
    closeSnackbar: () => void;
    /**
     * Cập nhật phần trăm tiến trình download (0 - 100) khi sử dụng với `type` là `download`.
     */
    setDownloadProgress?: (completed: number) => void;
}

/**
 * @category Feedback
 * @subcategory Snackbar
 * @typedef {object} SnackbarAction
 */
export interface SnackbarAction {
    /**
     * Chỉ định action có thể đóng snackbar sau khi click hay không
     *
     * @default false
     */
    close?: boolean;
    /**
     * Chữ hiển thị trên action
     */
    text?: string;
    /**
     * Callback được gọi khi người dùng click vào action
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 * @category Feedback
 * @subcategory Snackbar
 * @typedef {object} SnackbarOptions
 */
export interface SnackbarOptions {
    /**
     * Vị trí snackbar
     * @type SnackbarPosition
     */
    position?: keyof typeof SnackbarPosition;
    /**
     * Thời gian tồn tại của snackbar tính theo ms
     */
    duration?: number;
    /**
     * Nội dung văn bản hiển thị trên snackbar
     */
    text?: string;
    /**
     * Loại snackbar. Xem {@link SnackbarType}
     *  @type  SnackbarType
     */
    type?: keyof typeof SnackbarType;
    /**
     * Thiết lập các nút action cho snackbar
     * @type SnackbarAction
     */
    action?: SnackbarAction;
    /**
     * Hiển thị icon ở đầu snackbar, tương ứng với `type` được chọn.
     *
     * @default false
     */
    icon?: boolean;
    /**
     * Custom icon cho snackbar, thay thế cho `icon` mặc định. Có thể sử dụng `ReactNode` bất kỳ để làm icon, nhưng khuyến khích sử dụng `<Icon>` component.
     */
    prefixIcon?: ReactNode;
    /**
     * Hiển thị các action theo hàng dọc. Khuyến khích sử dụng khi có nhiều action hoặc nội dung các action dài và không hiển thị được hết trên một hàng ngang.
     *
     * @default false
     */
    verticalAction?: boolean;
    /**
     * Thiết lập độ sâu của snackbar, sử dụng khi có nhiều phần tử overlay lên nhau.
     */
    zIndex?: number;
    /**
     * Callback được gọi khi snackbar đóng.
     */
    onClose?: () => void;
}

export type UseSnackbarType = {
    /**
     * Hàm để tạo mới và mở một Snackbar. Có thể mở Snackbar với các {@link SnackbarOptions}
     */
    openSnackbar: (options: SnackbarOptions) => void;

    /**
     * Hàm để đóng một Snackbar, có thể sử dụng để đóng nhanh khi chưa hết thời gian hiển thị.
     */
    closeSnackbar: () => void;

    /**
     * Cập nhật phần trăm tiến trình download (0 - 100) khi sử dụng với `type` là `download`.
     */
    setDownloadProgress: (completed: number) => void;
};

export type BaseSnackbarOptions = Pick<
    SnackbarOptions,
    | "action"
    | "text"
    | "prefixIcon"
    | "icon"
    | "verticalAction"
    | "position"
    | "type"
    | "duration"
    | "zIndex"
> & {
    style?: CSSProperties;
    className?: string;
};

export interface BaseSnackbarProps extends BaseSnackbarOptions {
    /**
     * Tiến trình download của snackbar, sử dụng khi `type` là `download`.
     */
    downloadProgress?: number;
}

declare const SnackbarProvider: React.FunctionComponent<SnackbarProps>;

export default SnackbarProvider;


