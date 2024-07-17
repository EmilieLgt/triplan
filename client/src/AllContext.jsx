import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AllContext = createContext(null);

export default function AllContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userTrips, setUserTrips] = useState({});
  const [friendsAdded, setFriendsAdded] = useState({});
  const [otherFriends, setOtherFriends] = useState({});
  const [userFriends, setUserFriends] = useState({});
  const [pendingFriends, setPendingFriends] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      userTrips,
      setUserTrips,
      friendsAdded,
      setFriendsAdded,
      otherFriends,
      setOtherFriends,
      userFriends,
      setUserFriends,
      pendingFriends,
      setPendingFriends,
      successMessage,
      setSuccessMessage,
    }),
    [
      user,
      setUser,
      userTrips,
      setUserTrips,
      userFriends,
      setUserFriends,
      pendingFriends,
      setPendingFriends,
      successMessage,
      setSuccessMessage,
    ]
  );

  return (
    <AllContext.Provider value={contextValue}>{children}</AllContext.Provider>
  );
}

export { AllContext, AllContextProvider };

AllContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
