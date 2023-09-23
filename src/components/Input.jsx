// eslint-disable-next-line react/prop-types
export default function Input({id, label, type, placeholder, errorMessage, register}) {
  return (
      <div className="flex flex-col text-sm lg:text-base mb-6 w-full relative h-[63px] lg:h-[70px]">
        <label htmlFor={id} className="font-montserrat text-xs lg:text-sm bg-dark-purple px-1 mb-1 absolute -top-2 left-2">
          {label}
        </label>
        <input
          type={type}
          className="border  w-full p-2 lg:p-3 mb-1 rounded bg-transparent font focus:outline-none focus:ring-1 border-lighter-purple font-montserrat "
          placeholder={placeholder}
          {...register}
        />
        <span className="text-red-500 text-sm font">{errorMessage}</span>
      </div>
  );
}
