export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
