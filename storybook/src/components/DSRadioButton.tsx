import { colors, radius, spacing } from '../tokens';

export interface DSRadioButtonProps {
  label: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const DSRadioButton = ({
  label,
  value,
  selected = false,
  disabled = false,
  onChange,
}: DSRadioButtonProps) => {
  return (
    <button
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(value)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.sm,
        background: 'none',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {/* Radio indicator */}
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: radius.pill,
          border: `2px solid ${selected ? colors.black : colors.neutral.low}`,
          background: selected ? colors.black : colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 0.15s, background 0.15s',
        }}
      >
        {selected && (
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: radius.pill,
              background: colors.white,
            }}
          />
        )}
      </div>

      {/* Label */}
      <span
        style={{
          fontSize: 14,
          color: disabled ? colors.neutral.high : colors.text.body,
        }}
      >
        {label}
      </span>
    </button>
  );
};

export interface DSRadioGroupProps {
  options: Array<{ label: string; value: string }>;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const DSRadioGroup = ({ options, value, disabled = false, onChange }: DSRadioGroupProps) => (
  <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
    {options.map((opt) => (
      <DSRadioButton
        key={opt.value}
        label={opt.label}
        value={opt.value}
        selected={value === opt.value}
        disabled={disabled}
        onChange={onChange}
      />
    ))}
  </div>
);
