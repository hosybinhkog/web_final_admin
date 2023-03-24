import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import React from "react";
import { SelectType } from "../../interface";

interface PropsDropdownComponentDate {
  selected: any;
  options: SelectType[];
  onChange: (e: any) => void;
  className?: string | null;
  disabled?: boolean;
}

const DropdownComponentDate: React.FC<PropsDropdownComponentDate> = ({
  onChange,
  options,
  selected,
  className,
  disabled = false,
}) => {
  return (
    <>
      <Listbox
        value={selected}
        onChange={(e) => onChange(e)}
        disabled={disabled || selected}
      >
        <div className={`relative h-full ${className ? className : ""}`}>
          <Listbox.Button
            className={`ot-outline-none relative h-full w-full cursor-default bg-white pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 disabled:cursor-not-allowed ${
              className ? "" : " sm:text-sm"
            }`}
          >
            {selected.name ? (
              <span className='block'>{selected.name}</span>
            ) : (
              <span className='block h-5 w-[1.5rem]'>{selected.name}</span>
            )}
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronDownIcon
                className='ml-2 mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-[0.75rem] text-base text-site-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-center ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-1 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default DropdownComponentDate;
