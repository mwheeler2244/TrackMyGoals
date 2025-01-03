import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Header = async () => {
  const { userId } = await auth();

  return (
    <nav className="header-nav">
      <div className="header-logo">
        <Link href="/">Goal App</Link>
      </div>
      <div className="header-links">
        {!userId ? (
          <>
            <Link href="sign-in" passHref>
              <div className="header-link">Sign In</div>
            </Link>
            <Link href="sign-up" passHref>
              <div className="header-link">Sign Up</div>
            </Link>
          </>
        ) : (
          <>
            <Link href="dashboard" passHref>
              <div className="header-link">Goals</div>
            </Link>
            <Link href="add-post" passHref>
              <div className="header-link">Add Goal</div>
            </Link>

            <UserButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
