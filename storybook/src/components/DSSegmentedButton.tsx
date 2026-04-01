import { useState } from 'react';
import { colors, radius, spacing } from '../tokens';

export interface SegmentOption {
  label: string;
  value: string;
  icon?: string;
}

export interface DSSegmentedButtonProps {
  options: SegmentOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
}

export const DSSegmentedButton = ({
  options,
  defaultValue,
  onChange,
  fullWidth = false,
}: DSSegmentedButtonProps) => {
  const [active, setActive] = useState(defaultValue ?? options[0]?.value);

  const handleSelect = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div
      role="group"
      style={{
        display: 'inline-flex',
        border: `1px solid ${colors.border.light}`,
        borderRadius: radius.lg,
        overflow: 'hidden',
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      {options.map((opt, i) => {
        const isActive = opt.value === active;
        const isFirst = i === 0;
        const isLast = i === options.length - 1;

        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={isActive}
            onClick={() => handleSelect(opt.value)}
            style={{
              flex: fullWidth ? 1 : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: spacing.xs,
              padding: `${spacing.sm} ${spacing.base}`,
              background: isActive ? colors.black : colors.white,
              color: isActive ? colors.white : colors.text.body,
              border: 'none',
              borderRight: isLast ? 'none' : `1px solid ${colors.border.light}`,
              borderTopLeftRadius: isFirst ? radius.lg : '0',
              borderBottomLeftRadius: isFirst ? radius.lg : '0',
              borderTopRightRadius: isLast ? radius.lg : '0',
              borderBottomRightRadius: isLast ? radius.lg : '0',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: isActive ? 600 : 400,
              letterSpacing: '0.02em',
              transition: 'background 0.15s, color 0.15s',
              whiteSpace: 'nowrap',
            }}
          >
            {opt.icon && <span style={{ fontSize: 14 }}>{opt.icon}</span>}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
