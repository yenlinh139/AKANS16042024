
	export interface SliderProps {
    /**
     * Giá trị bắt đầu của slider.
     *
     * @default 0
     */
    min?: number;
    /**
     * Giá trị kết thúc của slider.
     *
     * @default 100
     */
    max?: number;
    /**
     * Bước nhảy của slider. Có thể là một số nguyên hoặc số thập phân.
     *
     * @default 1
     */
    step?: number;
    /**
     * Khoảng cách tối thiểu giữa 2 giá trị được chọn của slider. Chỉ có tác dụng khi sử dụng với range slider (`value` là một mảng 2 phần tử).
     */
    minRange?: number;
    /**
     * Tên định danh của slider trong form.
     */
    name?: string;
    /**
     * Nhãn của slider, được hiển thị phía trên slider.
     */
    label?: string;
    /**
     * Hiển thị giá trị hiện tại của slider ở góc trên bên phải, ngang hàng với `label`.
     *
     * Có thể sử dụng cùng với `renderValue` nếu cần bổ sung cơ chế tính toán hoặc tuỳ chỉnh nội dung cho giá trị hiển thị.
     *
     * @default false
     */
    showValue?: boolean;
    /**
     * Các điểm cần đánh dấu trên slider. Thiết lập `true` sẽ đánh dấu ứng với mỗi `step` trên slider. Nếu chỉ cần đánh dấu một vài giá trị tuỳ ý, truyền vào một mảng các giá trị cần được dánh dấu.
     *
     * @default false
     */
    marks?: boolean | number[];
    /**
     * Hàm dùng để định dạng giá trị hiển thị khi `showValue` được bật. Hàm này nhận vào (các) giá trị được chọn của slider và trả về một ReactNode để hiển thị.
     */
    renderValue?: (value: number | [number, number]) => React.ReactNode;
    /**
     * Phần tử được hiển thị ở bên trái slider.
     */
    prefix?: React.ReactNode;
    /**
     * Phần tử được hiển thị ở bên phải slider.
     */
    suffix?: React.ReactNode;
    /**
     * Giá trị được chọn hiện tại của slider (đối với slider một con trỏ) và mảng chứa 2 giá trị được chọn (đối với slider 2 con trỏ, còn gọi là range slider).
     *
     * Cần được sử dụng cùng với `onChange` để cập nhật giá trị khi người dùng thay đổi.
     */
    value?: number | [number, number];
    /**
     * Tương tự như `value`, nhưng giá trị này chỉ được sử dụng để khởi tạo giá trị cho slider khi nó được render lần đầu tiên. Thay đổi giá trị này sau khi render sẽ không có tác dụng.
     */
    defaultValue?: number | [number, number];
    /**
     * Callback được gọi khi giá trị của slider thay đổi. Tham số truyền vào là giá trị hoặc cặp giá trị mới của slider.
     */
    onChange?: (value: number | [number, number]) => void;
}

export interface SliderTrackProps {
    /**
     * Thụt lề của slider, theo đơn vị phần trăm.
     */
    offset: number;
    /**
     * Độ dày của thanh slider, theo đơn vị phần trăm.
     */
    width: number;
    /**
     * Các điểm cần đánh dấu trên slider. Thiết lập `true` sẽ đánh dấu ứng với mỗi `step` trên slider. Nếu chỉ cần đánh dấu một vài giá trị tuỳ ý, truyền vào một mảng các giá trị cần được dánh dấu.
     */
    marks?: SliderMarks;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    children?: React.ReactNode;
}

export interface SliderThumbProps {
    /**
     * Vị trí của con trỏ trên slider, theo đơn vị phần trăm.
     */
    position: number;
}

export interface SliderMarkProps {
    /**
     * Vị trí của điểm cần đánh dấu trên slider, theo đơn vị phần trăm.
     */
    position: number;
    /**
     * Điểm đánh dấu có nằm trong ngưỡng được chọn hay không.
     *
     * @default false
     */
    filled?: boolean;
}

export interface MoveEvent {
    x: number;
    y: number;
}

export type SliderValue = SliderProps["value"];
export type SliderMarks = SliderProps["marks"];

	declare const Slider: React.FunctionComponent<SliderProps>;

	export default Slider;
  