import { StyledSelect } from "./DropDown.styled";

interface DropDownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export const DropDown = ({ value, onChange, options }: DropDownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <StyledSelect value={value} onChange={handleChange}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </StyledSelect>
  );
};
