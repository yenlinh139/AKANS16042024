import React, { CSSProperties, ReactNode } from "react";
import { InputStatus } from "../../utils/statusUtils";

export type SelectValue = string | number;

export interface SelectOptionProps {
    children?: ReactNode;
    /**
     * Nội dung được hiển thị đến người dùng.
     */
    title?: string;
    /**
     * Giá trị của lựa chọn, được sử dụng để định dang các option đang được chọn bên trong `value` của `Select`.
     */
    value?: SelectValue;
    /**
     * Trạng thái vô hiệu hoá của lựa chọn. Người dùng vẫn có thể thấy được option này, nhưng không chọn nó bên trong `Select`.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * CSS class của lựa chọn.
     */
    className?: string;
}

export interface OptGroupProps {
    /**
     * Nhãn của nhóm các option có liên quan, được hiển thị ở phía trên đầu các lựa chọn.
     */
    label?: string;
    /**
     * Các `Option` cần được nhóm lại với nhau.
     */
    children?: ReactNode;
}

export interface BaseOptionType {
    /**
     * Trạng thái vô hiệu hoá của lựa chọn. Người dùng vẫn có thể thấy được option này, nhưng không thể chọn nó bên trong `Select`.
     *
     * @default false
     */
    disabled?: boolean;
    [name: string]: any;
}

export interface DefaultOptionType extends BaseOptionType {
    /**
     * Nội dung được hiển thị đến người dùng.
     */
    label: React.ReactNode;
    /**
     * Giá trị của lựa chọn, được sử dụng để định dang các option đang được chọn bên trong `value` của `Select`.
     */
    value?: string | number;
    /**
     * Các `Option` con nằm bên trong lựa chọn này.
     */
    children?: Omit<DefaultOptionType, "children">[];
}

export interface SelectTriggerProps {
    /**
     * Phần tử được dùng để kích hoạt hộp thoại chọn lựa.
     */
    children?: ReactNode;
    /**
     * Phần tử được hiển thị bên trong hộp thoại chọn lựa.
     */
    popupElement?: ReactNode;
    /**
     * Mặc định mở hộp thoại chọn lựa hay không. Thay đổi giá trị này sau khi render sẽ không có tác dụng.
     *
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Trạng thái hiển thị hiện tại của hộp thoại chọn lựa.
     *
     * @default false
     */
    visible?: boolean;
    /**
     * Callback được gọi khi trạng thái hiển thị của hộp thoại chọn lựa thay đổi.
     */
    onVisibilityChange?: (visibilityState: boolean) => void;
    /**
     * Mask là một lớp đặt lên các phần tử bên dưới, ngăn chặn người dùng tương tác với các phần tử đó.
     *
     * @default false
     */
    mask?: boolean;
    /**
     * Đóng hộp thoại chọn lựa khi người dùng nhấn vào mask.
     *
     * @default false
     */
    maskCloseable?: boolean;
}

export type SelectValueType = string | number;

export interface FlattenOptionData<OptionType> {
    /**
     * Nội dung được hiển thị đến người dùng.
     */
    label?: React.ReactNode;
    /**
     * Dữ liệu được lưu trữ bên trong option.
     */
    data: OptionType;
    /**
     * Key định danh cho option.
     */
    key: React.Key;
    /**
     * Giá trị của lựa chọn, được sử dụng để nhận biết lựa chọn nào được chọn bên trong `Select`.
     */
    value?: SelectValueType;
    /**
     * Có phải là một lựa chọn trong nhóm hay không
     *
     * @default false
     */
    groupOption?: boolean;
    /**
     * Có phải là một nhóm hay không
     *
     * @default false
     */
    group?: boolean;
}

/**
 * @category Form
 * @subCategory Select
 * @displayName Select
 */
export interface SelectProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    /**
     * Mảng các `value` của các `Option` được chọn (nếu `multiple` được bật) hoặc `value` của `Option` được chọn đối với chế độ single select.
     *
     * Cần được sử dụng cùng với `onChange` để cập nhật giá trị.
     */
    value?: SelectValue | SelectValue[];
    /**
     * Tương tự như `value`, nhưng được sử dụng để thiết lập giá trị mặc định cho `Select`. Thay đổi giá trị này sau khi render sẽ không có tác dụng.
     */
    defaultValue?: SelectValue | SelectValue[];
    /**
     * Cho phép chọn nhiều lựa chọn cùng một lúc.
     *
     * @default false
     */
    multiple?: boolean;
    /**
     * Các `Option` được sử dụng bên trong `Select`.
     */
    children?: ReactNode;
    /**
     * Mặc định mở hộp thoại chọn lựa hay không. Thay đổi giá trị này sau khi render sẽ không có tác dụng.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Trạng thái vô hiệu hoá của `Select`, cũng như các `Option` bên trong nó.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback được gọi khi giá trị của `Select` thay đổi. Tham số truyền vào là giá trị mới của `Select`, có thể là một mảng nếu `multiple` được bật.
     * Cần cập nhật lại giá trị của `value` nếu có truyền vào.
     */
    onChange?: (selected?: SelectValueType | SelectValueType[]) => void;
    /**
     * Callback được gọi khi hộp thoại chọn lựa được mở, cụ thể là sau người dùng nhấn vào input trigger.
     */
    onVisibilityChange?: (visibilityState: boolean) => void;
    /**
     * Nội dung được hiển thị trên các nhãn của `Select`. Các vị trí được hiển thị bao gồm: phía trên input trigger và tiêu đề ở đầu hộp thoại chọn lựa.
     */
    label?: string | ReactNode;
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
    status?: InputStatus;
    /**
     * Tên định danh của `Select`. Thường được sử dụng để phân biệt các input với nhau trong cùng một form.
     */
    name?: string;
    /**
     * Placeholder của input. Được hiển thị khi chưa có option nào được chọn.
     */
    placeholder?: string;
    /**
     * Mask là một lớp overlay màu xám được phủ lên các thành phần bên dưới hộp thoại, ngăn không cho người dùng tương tác với các nội dung đó và tập trung vào hộp thoại được mở.
     *
     * @default true
     */
    mask?: boolean;
    /**
     * Đóng hộp thoại lựa chọn khi người dùng nhấn vào mask.
     *
     * @default true
     */
    maskCloseable?: boolean;
    /**
     * Tự động đóng hộp thoại lựa chọn khi người dùng chọn xong một lựa chọn.
     *
     * @default false
     */
    closeOnSelect?: boolean;
}

export interface SelectPanelProps {
    /**
     * CSS class của hộp thoại chọn lựa.
     */
    className?: string;
    /**
     * Các lựa chọn được hiển thị bên trong hộp thoại.
     */
    children?: ReactNode;
    /**
     * Tiêu đề của hộp thoại
     */
    title?: string;
    /**
     * Cho phép chọn nhiều lựa chọn cùng một lúc.
     *
     * @default false
     */
    multiple?: boolean;
    /**
     * Mảng chứa các thiết lập của các lựa chọn cần được hiển thị bên trong hộp thoại.
     */
    optionsList: FlattenOptionData<DefaultOptionType>[];
}
export interface SelectContext {
    /**
     * Tên định danh của `Select`.
     */
    name?: string;
    /**
     * Mảng các `value` của các `Option` được chọn (nếu `multiple` được bật) hoặc `value` của `Option` được chọn đối với chế độ single select.
     */
    value: SelectValueType[] | SelectValueType;
    /**
     * Trạng thái vô hiệu hoá của `Select`, cũng như các `Option` bên trong nó.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback được gọi khi giá trị của `Select` thay đổi. Tham số truyền vào là giá trị mới của `Select`, có thể là một mảng nếu `multiple` được bật.
     */
    updateValue?: (value: SelectValueType | SelectValueType[]) => void;
    /**
     * Callback được gọi khi người dùng đóng hộp thoại chọn lựa.
     */
    closeSelectSheet?: () => void;
}

export interface CompoundedComponent
    extends React.ForwardRefExoticComponent<
        SelectProps & React.RefAttributes<HTMLInputElement>
    > {
    Option: React.FunctionComponent<SelectOptionProps>;
    OtpGroup: React.FunctionComponent<OptGroupProps>;
}

declare const Select: CompoundedComponent;

export default Select;


