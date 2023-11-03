import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SvgDropdownArrow, SvgLogout, SvgProfile } from '~/assets';
import UserOne from '~/assets/user-placeholder.png';

export const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const triggerRef = useRef<HTMLAnchorElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownOpen || dropdownRef.current.contains(target as Node) || triggerRef.current?.contains(target as Node))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <div className="relative">
      <Link ref={triggerRef} onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-4" to="#">
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-white">Name LastName</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <span className={`${dropdownOpen && 'rotate-180'}`}>
          <SvgDropdownArrow />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdownRef}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border shadow-default border-strokedark bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}>
        <ul className="flex flex-col gap-5 border-b px-6 py-7.5 border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
              <SvgProfile />
              My Profile
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <SvgLogout />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};
