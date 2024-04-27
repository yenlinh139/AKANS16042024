import React from "react";

export interface AnimationRoutesProps {
    /**
     * Các `<Route>` được tổ chức bên trong nhóm routes này.
     */
    children: React.ReactNode;
}
export interface ZMPRouterProps {
    /**
     * Nhận trực tiếp `<Routes>` hoặc `<AnimationRoutes>`.
     */
    children?: React.ReactNode;
    /**
     * Sử dụng `MemoryRouter` thay vì `BrowserRouter` (mặc định).
     *
     * @default false
     */
    memoryRouter?: boolean;
}
export interface AppConfigType {
    pages: string[];
    [key: string]: any;
}

declare global {
    interface Window {
        APP_ID: string;
        APP_CONFIG: AppConfigType;
    }
}
export type AnimationRouterDirectionType = "forward" | "backward";
export interface PageScrollPosition {
    [key: string]: number;
}

export interface AnimationRouterContextType {
    /**
     * Có sử dụng hiệu ứng chuyển trang hay không.
     *
     * @default true
     */
    animate: boolean;
    /**
     * Hướng chuyển trang.
     */
    direction: AnimationRouterDirectionType;
    /**
     * Cập nhật các thiết lập cho hiệu ứng chuyển trang.
     */
    setAnimate: ({
        animate,
        direction,
    }: {
        animate?: boolean;
        direction?: AnimationRouterDirectionType;
    }) => void;
    /**
     * Vị trí scroll của các trang mà người dùng đã cuộn tới.
     */
    pageScrollPosition: PageScrollPosition;
    /**
     * Callback được gọi để lưu lại vị trí scroll của trang hiện tại. Với `key` là định danh của trang và `position` là vị trí scroll, tính theo đơn vị px từ đầu trang.
     */
    updatePosition: (key: string, position: number) => void;
}

declare const AnimationRoutes: React.FunctionComponent<AnimationRoutesProps>;
declare const ZMPRouter: React.FunctionComponent<ZMPRouterProps>;

export default ZMPRouter;
export { AnimationRoutes, ZMPRouter };


