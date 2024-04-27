import React, {
    CSSProperties,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactElement,
    ReactNode,
} from "react";
import { InputStatus, ValidateStatus } from "../../utils/statusUtils";

export const enum InputType {
    text = "text",
    password = "password",
    number = "number",
}

export const enum InputSize {
    large = "large",
    medium = "medium",
    small = "small",
}
export interface InputFocusOptions extends FocusOptions {
    cursor?: "start" | "end" | "all";
}

export interface CommonInputProps {
    /**
     * Phần tử được chèn vào phía trước input. Khác với addonBefore, prefix nằm trong viền của input.
     */
    prefix?: ReactNode;
    /**
     * Phần tử được chèn vào phía sau input. Khác với addonAfter, suffix nằm trong viền của input.
     */
    suffix?: ReactNode;
    /**
     * Phần tử được chèn vào trước wrapper của input. Khác với prefix, addonBefore nằm ngoài viền của input.
     */
    addonBefore?: ReactNode;
    /**
     * Phần tử được chèn vào sau wrapper của input. Khác với suffix, addonAfter nằm ngoài viền của input.
     */
    addonAfter?: ReactNode;
    /**
     * CSS class của phần tử wrapper của input.
     */
    affixWrapperClassName?: string;
    /**
     * CSS class của input group.
     */
    groupClassName?: string;
    /**
     * CSS class của phần tử wrapper của input.
     */
    wrapperClassName?: string;
    /**
     * CSS class của phần tử input.
     */
    inputClassName?: string;
    /**
     * Hiện nút clear hay không.
     *
     * @default false
     */
    allowClear?: boolean | { clearIcon?: ReactNode };
}

export interface BaseInputProps extends CommonInputProps {
    /**
     * Giá trị của input.
     */
    value?: InputHTMLAttributes<HTMLInputElement>["value"];
    /**
     * Phần tử input được truyền trực tiếp vào component, thay vì sử dụng các props của component để render input.
     */
    inputElement: ReactElement;
    /**
     * Prefix của các CSS class của component. Thường được dùng trong trường hợp cần phải customize giao diện theo từng theme.
     */
    prefixCls?: string;
    /**
     * CSS class bổ sung cho input component.
     */
    className?: string;
    /**
     * Inline style cho input component.
     */
    style?: CSSProperties;
    /**
     * Trạng thái hoạt động của input. Khi bị disable, người dùng sẽ không thể focus vào input và thay đổi giá trị của input.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Trạng thái focus của input.
     *
     * @default false
     */
    focused?: boolean;
    triggerFocus?: () => void;
    /**
     * Bật chế độ chỉ đọc cho input. Người dùng sẽ không thể thay đổi giá trị của input ở chế độ này, nhưng vẫn có thể focus vào input.
     *
     * @default false
     */
    readOnly?: boolean;
    /**
     * Callback được gọi khi input được khôi phục về giá trị mặc định.
     */
    handleReset?: MouseEventHandler;
    hidden?: boolean;
    /**
     * Callback được gọi khi người dùng click bất kỳ đâu trên input. Khác với `onClick` không được gọi khi người dùng click vào các phần tử không phải ô nhập liệu của input như icon, addon, ...
     */
    onInputTriggerClick?: React.MouseEventHandler<HTMLElement>;
}

export interface ShowCountProps {
    /**
     * Mặc định bộ đếm sẽ sử dụng `value.length` để đếm số lượng ký tự. Sử dụng tham số này để đếm số lượng ký tự theo cách khác.
     *
     * @param {string} args.value Giá trị của input.
     * @param {number} args.count Số lượng ký tự hiện tại.
     * @param {number} args.maxLength Độ dài tối đa của input.
     * @returns {ReactNode} Nội dung cần hiển thị trên bộ đếm ký tự.
     */
    formatter: (args: {
        value: string;
        count: number;
        maxLength?: number;
    }) => ReactNode;
}

export interface ClearableLabeledBaseInputProps extends BaseInputProps {
    /**
     * Nhãn của input. Sẽ được hiển thị phía trên input.
     */
    label?: string;
    /**
     * Helper text là phần văn bản ngắn nằm dưới các ô nhập liệu. Nội dung của các văn bản này thường chứa thông tin hướng dẫn giúp người dùng hiểu rõ hơn về tác dụng hoặc mô tả định dạng của dữ liệu được khuyến khích nhập vào.
     */
    helperText?: string;
    /**
     * Error text là phần văn bản ngắn nằm dưới các ô nhập liệu. Nội dung của các văn bản này thường chứa thông tin cảnh báo về lỗi của dữ liệu được nhập vào, cũng như hướng dẫn cách khắc phục.
     *
     * `errorText` sẽ được hiển thị thay cho `helperText` khi `status` có giá trị là `error`.
     */
    errorText?: string;
    /**
     * Trạng thái hợp lệ của input. Nếu là `error`, input sẽ có màu cảnh báo kèm theo `errorText`, ngược lại input sẽ có màu trung hoà kèm theo `helperText`.
     */
    status?: ValidateStatus;
    /**
     * Hiển thị nút clear ở góc phải của input. Khi được bật, người dùng có thể nhấn vào nút này để xóa giá trị của input.
     * Có thể truyền vào một object với thuộc tính `mode` để chỉ định khi nào biểu tượng clear được hiển thị:
     * - `focus`: chỉ hiển thị nút clear khi input đang được focus.
     * - `always`: luôn hiển thị nút clear, kể cả khi người dùng không focus vào input.
     *
     * @default false
     */
    clearable?: boolean | { mode?: "focus" | "always" };
    /**
     * Độ dài tối đa của input. Người dùng sẽ không thể nhập thêm ký tự khi độ dài của input đạt giá trị này.
     */
    maxLength?: number;
    /**
     * Hiện số lượng ký tự đã nhập vào input ở bên phải (bộ đếm ký tự). Có thể truyền vào một object với thuộc tính `formatter` để ghi đè cơ chế của bộ đếm.
     *
     * @default false
     */
    showCount?: boolean | ShowCountProps;
}

export interface InputProps
    extends Omit<
            ClearableLabeledBaseInputProps,
            "status" | "inputElement" | "onInputTriggerClick"
        >,
        Omit<
            InputHTMLAttributes<HTMLInputElement>,
            "size" | "prefix" | "type"
        > {
    /**
     * Giá trị của input.
     *
     * Cần được sử dụng cùng với `onChange` để cập nhật lại giá trị.
     */
    value?: InputHTMLAttributes<HTMLInputElement>["value"];
    /**
     * Callback được gọi khi giá trị của input thay đổi. Cần phải cập nhật lại giá trị của `value` nếu được truyền vào.
     */
    onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
    /**
     * Loại input.
     */
    type?: keyof typeof InputType;
    /**
     * Trạng thái hợp lệ của input. Nếu là `error`, input sẽ có màu cảnh báo kèm theo `errorText`, ngược lại input sẽ có màu trung hoà kèm theo `helperText`.
     */
    status?: InputStatus;
    /**
     * Callback được gọi khi người dùng nhấn Enter hoặc xuống dòng trong input.
     */
    onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
    /**
     * Kích thước của input. Mang một trong các giá trị `small`, `medium` hoặc `large`.
     *
     * @default 'medium'
     */
    size?: keyof typeof InputSize;
}

export interface InputRef {
    /**
     * Focus con trỏ vào input.
     */
    focus: (options?: InputFocusOptions) => void;
    /**
     * Thoát focus khỏi input.
     */
    blur: () => void;
    /**
     * Chọn (bôi đen) văn bản trong input. Nếu không có tham số, sẽ chọn toàn bộ văn bản trong input.
     *
     * @param {number} start Vị trí bắt đầu chọn.
     * @param {number} end Vị trí kết thúc chọn.
     * @param {string} direction Hướng chọn văn bản.
     */
    setSelectionRange: (
        start: number,
        end: number,
        direction?: "forward" | "backward" | "none"
    ) => void;
    select: () => void;
    /**
     * Tham chiếu đến phần tử input.
     */
    input: HTMLInputElement | null;
}

export interface InputIconProps {
    /**
     * CSS class của icon.
     */
    className?: string;
    /**
     * Inline style của icon.
     */
    style?: React.CSSProperties;
}

export interface PasswordProps extends InputProps {
    /**
     * Khi được bật, một biểu tượng hình con mắt (Visibility Toggle) sẽ được hiển thị ở bên phải input để cho phép người dùng hiển thị hoặc che đi mật khẩu họ đã nhập khi nhấn vào.
     *
     * @default false
     */
    visibilityToggle?: boolean;
    /**
     * Custom icon để hiển thị trên Visibility Toggle thay cho icon mặc định. Cần được sử dụng cùng với `visibilityToggle`.
     *
     * Giá trị được truyền vào dưới dạng một function, với tham số đầu tiên là một biến boolean thể hiện trạng thái hiển thị hoặc bị che của mật khẩu và trả về một ReactNode.
     */
    iconRender?: (visible: boolean) => React.ReactNode;
}

export interface SearchProps extends InputProps {
    /**
     * Callback được gọi khi người dùng tiến hành tìm kiếm. Các hành động được xem là tiến hành tìm kiếm bao gồm:
     * - Nhấn vào biểu tượng kính lúp (Search Icon)
     * - Nhấn Enter/Return hoặc xuống dòng trong input
     */
    onSearch?: (
        value: string,
        event?:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLElement>
            | React.KeyboardEvent<HTMLInputElement>
    ) => void;
    /**
     * Trạng thái loading của input. Khi được bật, input sẽ hiển thị một biểu tượng loading ở đầu input thay cho biểu tượng kính lúp (Search Icon).
     *
     * @default false
     */
    loading?: boolean;
}

export interface AutoSizeType {
    /**
     * Số dòng tối thiểu của textarea.
     */
    minRows?: number;
    /**
     * Số dòng tối đa của textarea.
     */
    maxRows?: number;
}

export interface TextAreaRef {
    /**
     * Focus con trỏ vào textarea.
     */
    focus: (options?: InputFocusOptions) => void;
    /**
     * Thoát focus khỏi textarea.
     */
    blur: () => void;
    /**
     * Chọn (bôi đen) văn bản trong input. Nếu không có tham số, sẽ chọn toàn bộ văn bản trong input.
     *
     * @param {number} start Vị trí bắt đầu chọn.
     * @param {number} end Vị trí kết thúc chọn.
     * @param {string} direction Hướng chọn văn bản.
     */
    setSelectionRange: (
        start: number,
        end: number,
        direction?: "forward" | "backward" | "none"
    ) => void;
    select: () => void;
    /**
     * Tham chiếu đến phần tử textarea.
     */
    textarea: HTMLTextAreaElement | null;
}

export interface TextAreaProps
    extends Omit<ClearableLabeledBaseInputProps, "status" | "inputElement">,
        Omit<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            "size" | "prefix" | "type"
        > {
    /**
     * Giá trị của textarea.
     *
     * Cần được sử dụng cùng với `onChange` để cập nhật lại giá trị.
     */
    value?: InputHTMLAttributes<HTMLTextAreaElement>["value"];
    /**
     * Callback được gọi khi giá trị của textarea thay đổi. Cần phải cập nhật lại giá trị của `value` nếu được truyền vào.
     */
    onChange?: InputHTMLAttributes<HTMLTextAreaElement>["onChange"];
    /**
     * Trạng thái hợp lệ của textarea. Nếu là `error`, textarea sẽ có màu cảnh báo kèm theo `errorText`, ngược lại textarea sẽ có màu trung hoà kèm theo `helperText`.
     */
    status?: InputStatus;
    /**
     * Callback được gọi khi người dùng nhấn Enter hoặc xuống dòng trong textarea.
     */
    onPressEnter?: KeyboardEventHandler<HTMLTextAreaElement>;
    /**
     * Kích thước của textarea. Mang một trong các giá trị `small`, `medium` hoặc `large`.
     * @default 'medium'
     */
    size?: keyof typeof InputSize;
    /**
     * Hiện số lượng ký tự đã nhập vào textarea ở góc dưới bên phải (bộ đếm ký tự). Có thể truyền vào một object với thuộc tính `formatter` để ghi đè cơ chế của bộ đếm.
     *
     * @default false
     */
    showCount?: boolean | ShowCountProps;
}

export interface OTPRef {
    /**
     * Focus vào OTP và hiện bàn phím số để người dùng có thể nhập mã OTP.
     */
    focus: () => void;
    /**
     * Thoát focus khỏi OTP.
     */
    blur: () => void;
}

export interface OTPProps
    extends Pick<
        InputHTMLAttributes<HTMLInputElement>,
        | "disabled"
        | "readOnly"
        | "onChange"
        | "name"
        | "id"
        | "className"
        | "style"
    > {
    /**
     * Giá trị của OTP. Cần được sử dụng cùng với `onChange` để cập nhật lại giá trị.
     */
    value: string;
    /**
     * Giá trị mặc định của OTP. Thay đổi giá trị của `defaultValue` khi component đã được render sẽ không có tác dụng.
     */
    defaultValue: string;
    /**
     * Độ dài của OTP, cũng đồng thời là số lượng ô nhập mã OTP. Mặc định là 4 ô.
     *
     * @default 4
     */
    otpLength?: number;
    /**
     * Hiển thị hoặc che đi mã OTP được nhập. Mặc định, mã OTP sẽ được hiển thị dưới dạng các dấu hoa thị (*).
     *
     * @default false
     */
    show?: boolean;
}
export interface CompoundedComponent
    extends React.ForwardRefExoticComponent<
        InputProps & React.RefAttributes<InputRef>
    > {
    Password: React.ForwardRefExoticComponent<
        PasswordProps & React.RefAttributes<InputRef>
    >;
    Search: React.ForwardRefExoticComponent<
        SearchProps & React.RefAttributes<InputRef>
    >;
    TextArea: React.ForwardRefExoticComponent<
        TextAreaProps & React.RefAttributes<TextAreaRef>
    >;
    OTP: React.ForwardRefExoticComponent<
        OTPProps & React.RefAttributes<OTPRef>
    >;
}

declare const Input: CompoundedComponent;

export default Input;


