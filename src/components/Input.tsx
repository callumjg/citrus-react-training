interface InputProps {
  value?: string;
  setValue: (v: string) => void;
}

const Input: React.FC<InputProps> = ({ value, setValue }) => (
  <input
    className="form-control"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

export default Input;
