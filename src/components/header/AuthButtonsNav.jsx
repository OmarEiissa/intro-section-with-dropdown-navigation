import PropTypes from "prop-types";
import { Button } from "../ui/button";

const AuthButtonsNav = ({ divClasses, buttonClasses }) => {
  return (
    <div className={`items-center gap-4 text-almostGray ${divClasses}`}>
      <Button
        variant={"ghost"}
        className={`rounded-xl hover:text-almostBlack transition-colors duration-300 ${buttonClasses}`}
      >
        Login
      </Button>
      <Button
        variant={"outline"}
        className={`rounded-xl hover:text-almostBlack border-2 border-almostGray hover:border-almostBlack transition-colors duration-300 ${buttonClasses}`}
      >
        Register
      </Button>
    </div>
  );
};

export default AuthButtonsNav;

AuthButtonsNav.propTypes = {
  divClasses: PropTypes.string,
  buttonClasses: PropTypes.string
};
