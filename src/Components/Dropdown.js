import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Controller, useForm } from "react-hook-form";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ items, changeHandler, menuBarText }) => {
  return (
    <Menu as="div" className="relative inline-block text-left w-full mt-5">
      <div>
        <Menu.Button
          id="dropdownHeader"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-specBeige px-8 max-mobile:px-2 py-2 max-mobile:text-[80%] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {menuBarText}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-specBeige">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <input
                    type="button"
                    onClick={changeHandler}
                    name="thickness"
                    value={item.name}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer hover:bg-specYellow hover:font-bold w-full"
                    )}
                  />
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
