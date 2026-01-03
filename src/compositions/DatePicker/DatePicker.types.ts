export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}
