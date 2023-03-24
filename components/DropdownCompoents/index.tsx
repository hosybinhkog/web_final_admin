import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { SelectType } from "../../interface";

interface PropsDropdownComponent {
  selected: any;
  options: SelectType[];
  onChange: (e: any) => void;
  className?: string;
  classNameButton?: string | null;
  disabled?: boolean;
}

const DropdownComponents: React.FC<PropsDropdownComponent> = ({
  selected,
  onChange,
  options,
  className,
  classNameButton,
  disabled = false,
}) => {
  return (
    <>
      <Listbox
        value={selected}
        onChange={(e) => onChange(e)}
        disabled={disabled}
      >
        <div className={`relative ${className ? className : ""}`}>
          <Listbox.Button
            className={`relative h-[1.875rem] w-[5.625rem] cursor-default bg-white pr-7 pl-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 disabled:cursor-not-allowed lg:h-10 lg:w-full lg:pr-10 ${
              className ? "" : " border-2 sm:text-sm"
            } ${classNameButton ? classNameButton : ""}`}
          >
            <span className='block'>{selected?.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronDownIcon
                className='ml-2 mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs text-site-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:text-sm'>
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
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-amber-600 lg:pl-3'>
                          <CheckIcon
                            className='h-4 w-4 lg:h-5 lg:w-5'
                            aria-hidden='true'
                          />
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

export default DropdownComponents;
