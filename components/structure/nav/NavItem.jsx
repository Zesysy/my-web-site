import Link from "next/link";
import { useRouter } from "next/router";
import { NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";

const NavItemCustom = ({ link, label }) => {
  const router = useRouter();

  return (
    <NavItem
      style={{ cursor: "pointer" }}
      active={router.pathname === link ? true : false} // condition of on rendering the active class according to the current path and that of the NavLink
    >
      <Link href={link}>
        <NavLink className="float-right mr-lg-3">
          <strong>{label}</strong>
        </NavLink>
      </Link>
    </NavItem>
  );
};

NavItemCustom.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavItemCustom;
