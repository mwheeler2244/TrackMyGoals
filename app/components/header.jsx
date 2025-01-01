import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Header = async () => {
  const { userId } = await auth();

  return (
    <nav className="header-nav">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <div className="header-logo">Clerk App</div>
        </Link>
      </div>
      <div className="header-links">
        {!userId && (
          <>
            <Link href="sign-in">
              <div className="header-link">Sign In</div>
            </Link>
            <Link href="sign-up">
              <div className="header-link">Sign Up</div>
            </Link>
            <Link href="form">
              <div className="header-link">Form</div>
            </Link>
          </>
        )}
        {userId && (
          <>
            <Link href="dashboard">
              <div className="header-link">Dashboard</div>
            </Link>
            <Link href="form">
              <div className="header-link">Form</div>
            </Link>

            <UserButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
