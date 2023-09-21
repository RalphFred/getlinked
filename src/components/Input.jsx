// eslint-disable-next-line react/prop-types
export default function Input({id, label, type, placeholder, errorMessage, register}) {
  return (
    <div className="flex flex-col mb-2">
      <div className="flex flex-col mb-2">
        <label htmlFor={id} className="font mb-1">
          {label}
        </label>
        <input
          type={type}
          className="border w-full p-2 rounded bg-transparent font focus:outline-none focus:ring-1 focus:border-lighter-purple"
          placeholder={placeholder}
          {...register}
        />
        <span className="text-red-500 text-sm font">{errorMessage}</span>
      </div>
    </div>
  );
}
