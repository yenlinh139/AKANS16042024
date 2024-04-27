
	import { CommonProps } from "src/types/common";

export enum CellType {
    IN_VIEW = "in-view",
    OUT_OF_VIEW = "out-of-view",
}

export type CalendarMode = "decade" | "year" | "month" | "week" | "date";

export type HeaderRender<DateType> = (config: {
    value: DateType;
    type: CalendarMode;
    onChange: (date: DateType) => void;
    onTypeChange: (type: CalendarMode) => void;
}) => React.ReactElement;

export type CalendarCellType<DateType> = {
    label: string;
    value: DateType;
    content?: React.ReactElement;
    type: CellType;
    disabled?: boolean;
};

export interface SelectInfo {
    source?: CalendarMode;
}

export interface CellRenderInfo<DateType> {
    range?: "start" | "end";
    originNode?: React.ReactElement;
    today: DateType;
    type: CalendarMode;
}

export interface CalendarHeaderProps<DateType> extends CommonProps {
    value: DateType;
    className?: string;
    defaultMode?: CalendarMode;
    onNext: () => void;
    onPrev: () => void;
    onTypeChange: (type: CalendarMode) => void;
}

export interface CalendarHeaderTitleProps {
    children: React.ReactElement | string;
    onClick: () => void;
}

export interface CalendarPanelProps<DataType> {
    header: Array<string | React.ReactElement>;
    body: CalendarCellType<DataType>[][];
    onCellClick?: (data: Date, type: CellType) => void;
}

export interface CalendarCellProps {
    label: string;
    content?: React.ReactElement;
}

export type CellRender<DateType> = (
    date: DateType,
    info: CellRenderInfo<DateType>
) => React.ReactElement;

export interface CalendarRef {
    calendar: HTMLDivElement | null;
}

/**
 * Thuộc tính của Calendar
 * @template DateType - kiểu dữ liệu của ngày tháng (ví dụ Date, number, string, ...)
 */
export interface CalendarProps<DateType> extends CommonProps {
    /**
     * Tham chiếu đến HTMLElement nhận focus khi component mount
     */
    ref?: CalendarRef;
    /**
     * ClassName được gán vào root của component
     */
    className?: string;
    /**
     * Style được gán vào root của component
     */
    style?: React.CSSProperties;
    /**
     * Hàm được gọi để kiểm tra xem ngày tháng được chỉ định có cho phép chọn không
     */
    disabledDate?: (date: DateType) => boolean;
    /**
     * Hàm được gọi để render nội dung trong mỗi ô ngày tháng không bao gồm tiêu đề
     */
    cellRender?: CellRender<DateType>;
    /**
     * Hàm được gọi để render nội dung trong mỗi ô ngày tháng bao gồm cả tiêu đề
     */
    fullCellRender?: CellRender<DateType>;
    /**
     * Hàm được gọi để render mỗi thứ trong trạng thái fullscreen
     */
    daysOfWeekRender?: (
        date: DateType,
        info: CellRenderInfo<DateType>
    ) => React.ReactElement;
    /**
     * Hàm được gọi để render tiêu đề của component
     */
    headerRender?: HeaderRender<DateType>;

    value?: DateType;
    /**
     * Giá trị mặc định của ngày tháng
     */
    defaultValue?: DateType;
    /**
     * Ngôn ngữ được sử dụng cho component
     */
    locale?: string;
    /**
     * Kiểu hiển thị của component
     */
    fullscreen?: boolean;
    /**
     * Ngày bắt đầu của tuần (từ 0 đến 6, tương ứng với từ CN đến thứ 2)
     *
     * @default 0
     */
    startOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Số lượng tuần hiển thị trong tháng (mặc định là "auto")
     *
     * @default "auto"
     */
    numberOfWeek?: "auto" | number;
    /**
     * Định dạng của tên ngày trong tuần (mặc định là "short")
     *
     * @default "short"
     */
    dayOfWeekNameFormat?: "short" | "long";
    /**
     * Hàm được gọi để render tên ngày trong tuần
     */
    dayOfWeekNameRender?: (day: number) => string | React.ReactElement;
    /**
     * Hàm được gọi khi thay đổi giá trị và loại hiển thị của component
     */
    onPanelChange?: (date: DateType, mode: CalendarMode) => void;
    /**
     * Hàm được gọi khi người dùng chọn một ngày tháng
     */
    onSelect?: (date: DateType, selectInfo: SelectInfo) => void;
}

export interface CalendarContextType<DateType> {
    date: DateType;
    selectedDate: DateType;
    mode: CalendarMode;
    locale?: string;
    cellRender?: CellRender<DateType>;
    fullCellRender?: CellRender<DateType>;
}

	declare const Calendar: React.FunctionComponent<CalendarProps>;

	export default Calendar;
  