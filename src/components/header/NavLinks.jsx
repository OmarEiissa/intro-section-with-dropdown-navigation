import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

const navItems = [
  {
    label: "Features",
    href: "",
    links: [
      { label: "Todo List", href: "#", iconSrc: "/icon-todo.svg" },
      { label: "Calendar", href: "#", iconSrc: "/icon-calendar.svg" },
      { label: "Reminders", href: "#", iconSrc: "/icon-reminders.svg" },
      { label: "Planning", href: "#", iconSrc: "/icon-planning.svg" },
    ],
  },
  {
    label: "Company",
    href: "",
    links: [
      { label: "History", href: "#", iconSrc: "" },
      { label: "Our Team", href: "#", iconSrc: "" },
      { label: "Blog", href: "#", iconSrc: "" },
    ],
  },
  {
    label: "Careers",
    href: "#",
    links: [],
  },
  {
    label: "About",
    href: "#",
    links: [],
  },
];

const NavLinks = ({ className }) => {
  return (
    <Menubar
      className={`border-none p-0 bg-transparent shadow-none gap-1.5 ${className}`}
    >
      {navItems.map((item, index) => (
        <MenubarMenu key={index}>
          {item.href ? (
            <MenubarLabel className="!ml-0 text-almostGray hover:text-almostBlack transition-colors duration-300 w-full max-md:text-base">
              <a href={item.href} className="w-full flex items-start">
                {item.label}
              </a>
            </MenubarLabel>
          ) : (
            <MenubarTrigger className="cursor-pointer px-2 !ml-0 text-almostGray hover:text-almostBlack transition-colors duration-300 w-full max-md:text-base">
              <div className="flex items-center md:items-end">
                <span className="w-full flex items-start">{item.label}</span>
                <ChevronDown size={16} />
              </div>
            </MenubarTrigger>
          )}
          {item.links.length > 0 && (
            <MenubarContent>
              {item.links.map((link, linkIndex) => (
                <MenubarItem
                  key={linkIndex}
                  className="flex items-center gap-2 max-md:text-sm"
                >
                  {link.iconSrc && (
                    <img src={link.iconSrc} alt="icon" className="w-4" />
                  )}
                  {link.href ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default NavLinks;

NavLinks.propTypes = {
  className: PropTypes.string,
};
