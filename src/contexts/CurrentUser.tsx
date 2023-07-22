import { createContext, useState, useEffect, ReactNode } from "react";

interface CurrentUserContext {
  currentUser: any;
  setCurrentUser: (user: any) => void;
}

export const CurrentUser = createContext<CurrentUserContext>({
  currentUser: null,
  setCurrentUser: () => {},
});
interface Props {
  children: ReactNode;
}
function CurrentUserProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
    const getLoggedInUser = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/authentication/profile`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      let user = await response.json();
      setCurrentUser(user);
    };
    getLoggedInUser();
  }, []);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;