export const Input = ({
  className,
  name,
  type = 'text',
  value,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div
      className={`${className} relative border border-zinc-800 rounded-md px-3 py-2 font-light tracking-wide shadow-sm focus-within:ring-1 focus-within:ring-brand-600 focus-within:border-brand-600`}
    >
      <label
        htmlFor={name}
        className='absolute -top-[] left-2 -mt-px bg-black inline-block px-1 text-sm text-zinc'
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className='block bg-black w-full border-0 px-0 py-2 text-zinc-400 font-light tracking-wide placeholder-gray-600 focus:ring-0 sm:text-sm'
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
