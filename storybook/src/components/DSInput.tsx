import { useState } from 'react';
import { colors, inputTokens, radius, spacing } from '../tokens';

export type InputState = 'default' | 'active' | 'error' | 'disabled';

export interface DSInputProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  state?: InputState;
  type?: 'text' | 'email' | 'password' | 'tel';
  value?: string;
  onChange?: (value: string) => void;
  leadingIcon?: string;
  trailingIcon?: string;
}

export const DSInput = ({
  label,
  placeholder = '',
  helperText,
  errorMessage,
  state = 'default',
  type = 'text',
  value,
  onChange,
  leadingIcon,
  trailingIcon,
}: DSInputProps) => {
  const [focused, setFocused] = useState(false);

  const resolvedState: InputState = state === 'default' && focused ? 'active' : state;
  const isDisabled = resolvedState === 'disabled';
  const isError = resolvedState === 'error';

  const borderColor = inputTokens.border[resolvedState] ?? inputTokens.border.default;
  const labelColor = inputTokens.text.label.default;
  const inputColor = isDisabled
    ? inputTokens.text.input.disabled
    : focused
    ? inputTokens.text.input.active
    : inputTokens.text.input.default;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs, width: '100%' }}>
      {/* Label */}
      <label
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: labelColor,
        }}
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.sm,
          padding: `${spacing.md} ${spacing.base}`,
          border: `1px solid ${borderColor}`,
          borderRadius: radius.md,
          background: isDisabled ? colors.neutral.lower : colors.white,
          transition: 'border-color 0.2s',
        }}
      >
        {leadingIcon && (
          <span
            style={{
              fontSize: 16,
              color: isError
                ? inputTokens.icon.error
                : focused
                ? inputTokens.icon.active
                : isDisabled
                ? inputTokens.icon.disabled
                : inputTokens.icon.default,
              flexShrink: 0,
            }}
          >
            {leadingIcon}
          </span>
        )}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: 14,
            color: inputColor,
            fontFamily: 'inherit',
          }}
        />

        {trailingIcon && (
          <span
            style={{
              fontSize: 16,
              color: isError
                ? inputTokens.icon.error
                : isDisabled
                ? inputTokens.icon.disabled
                : inputTokens.icon.default,
              flexShrink: 0,
            }}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {/* Helper / Error text */}
      {(helperText || (isError && errorMessage)) && (
        <span
          style={{
            fontSize: 11,
            color: isError ? inputTokens.text.helper.error : colors.text.caption,
          }}
        >
          {isError ? errorMessage : helperText}
        </span>
      )}
    </div>
  );
};
