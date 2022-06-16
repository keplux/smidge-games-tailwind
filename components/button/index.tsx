type ButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  children: any;
};

export const Button = ({
  size = 'md',
  variant = 'solid',
  disabled = false,
  children,
}: ButtonProps) => {
  const bgColor = variant === 'solid' ? 'bg-brand-600' : '';
  const bgColorHover =
    variant === 'solid' ? 'hover:bg-brand-700' : 'hover:bg-zinc-900';
  const borderColor =
    variant === 'outline' ? 'border-zinc-400' : 'border-transparent';
  const style = {
    xs: `inline-flex items-center px-2.5 py-1.5 border ${borderColor} text-xs font-medium rounded shadow-sm text-white ${bgColor} ${bgColorHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed`,
    sm: `inline-flex items-center px-3 py-2 border ${borderColor} text-sm leading-4 font-medium rounded-md shadow-sm text-white ${bgColor} ${bgColorHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed`,
    md: `inline-flex items-center px-4 py-2 border ${borderColor} text-sm font-medium rounded-md shadow-sm text-white ${bgColor} ${bgColorHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed`,
    lg: `inline-flex items-center px-4 py-2 border ${borderColor} text-base font-medium rounded-md shadow-sm text-white ${bgColor} ${bgColorHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed`,
    xl: `inline-flex items-center px-6 py-3 border ${borderColor} text-base font-medium rounded-md shadow-sm text-white ${bgColor} ${bgColorHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed`,
  };
  return (
    <button type='button' disabled={disabled} className={style[size]}>
      <span className='font-light text-center'>{children}</span>
    </button>
  );
};
export default Button;
