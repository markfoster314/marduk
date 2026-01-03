import { Box } from "@/components/Box/Box";
import { TextInput } from "@/components/TextInput/TextInput";
import { Text } from "@/components/Text/Text";
import { CSSProperties, useState } from "react";
import { DatePickerProps } from "./DatePicker.types";
import "./DatePicker.css";

export const DatePicker = ({
  value,
  onChange: _onChange,
  placeholder = "Select date",
  disabled,
  ...props
}: DatePickerProps & { style?: CSSProperties }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString();
  };

  return (
    <Box className="marduk-date-picker" {...props}>
      <TextInput
        type="text"
        value={value ? formatDate(value) : ""}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
        onClick={() => !disabled && setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Box className="marduk-date-picker-calendar">
          <Box className="marduk-date-picker-calendar-header">
            <Text>Calendar</Text>
          </Box>
          <Box className="marduk-date-picker-calendar-body">
            <Text>Calendar implementation coming soon</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};
