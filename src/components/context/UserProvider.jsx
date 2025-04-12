import { UserContext } from "./userContext";

export default function UserProvider({children}) {
  return (
      <UserContext.Provider>

        {children}
        </UserContext.Provider>
    );
}