import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { SelectType } from "../../interface";

interface dropdownComponent {
  selected: any;
  options: SelectType[];
  onChange: (e: any) => void;
  className?: string | null;
}
const DropdownComponentTime = ({
  selected,
  options,
  onChange,
  className,
}: dropdownComponent) => {
  return (
    <>
      <Listbox value={selected} onChange={(event) => onChange(event)}>
        <div className={`relative ${className ? className : ""}`}>
          <Listbox.Button
            className={`relative h-10 w-full cursor-default bg-white pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ${
              className ? "" : " border-2 sm:text-sm"
            }`}
          >
            <span className='block'>{selected.name}</span>
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
            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base text-site-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
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
export default DropdownComponentTime;
