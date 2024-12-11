import { AlignJustify, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import NavLinks from "./navLinks";
import AuthButtonsNav from "./AuthButtonsNav";

const Header = () => {
  return (
    <div className="flex justify-between py-4 max-md:px-6">
      <div className="flex items-end gap-14">
        <a href="#" className="flex items-end gap-2">
          <img src="/logo.svg" alt="logo" className="w-20 md:w-24" />
        </a>
        <NavLinks className={"hidden md:flex"} />
      </div>

      <AuthButtonsNav divClasses={"hidden md:flex"} />

      {/* ------------- Mobile Menu ------------- */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <AlignJustify size={24} />
          </DrawerTrigger>

          <DrawerContent className="bg-almostWhite h-[calc(100vh-64px)]">
            <DrawerHeader>
              <DrawerTitle className="text-almostBlack flex justify-end">
                <DrawerClose>
                  <X size={30} />
                </DrawerClose>
              </DrawerTitle>
              <DrawerDescription
                asChild
                className="text-almostBlack h-auto items-start"
              >
                <NavLinks className="md:hidden flex flex-col" />
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter className={"mt-0"}>
              <AuthButtonsNav
                divClasses={"md:hidden flex flex-col !gap-2"}
                buttonClasses={"w-full py-6 text-base"}
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
