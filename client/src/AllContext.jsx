import { createContext, useState, useMemo, useCallback } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const AllContext = createContext(null);

export default function AllContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userTrips, setUserTrips] = useState([]);
  const [friendsAdded, setFriendsAdded] = useState({});
  const [otherFriends, setOtherFriends] = useState({});
  const [userFriends, setUserFriends] = useState([]);
  const [pendingFriends, setPendingFriends] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allTeams, setAllTeams] = useState({});

  const [team, setTeam] = useState();

  const login = useCallback(
    (userData, tripsData, friendsData, otherFriendsData) => {
      setUser(userData);
      setUserTrips(tripsData);
      setFriendsAdded(friendsData);
      setOtherFriends(otherFriendsData);
      setIsLoggedIn(true);

      // Store all info in one cookie
      const allData = {
        user: userData,
        trips: tripsData,
        friendsAdded: friendsData,
        otherFriends: otherFriendsData,
      };
      Cookies.set("userData", JSON.stringify(allData), { expires: 1 });
    },
    []
  );

  const logout = useCallback(() => {
    setUser({});
    setIsLoggedIn(false);
    Cookies.remove("userData");
  }, []);

  const checkLoginStatus = useCallback(() => {
    const userDataCookie = Cookies.get("userData");
    if (userDataCookie) {
      const allData = JSON.parse(userDataCookie);
      setUser(allData.user);
      setUserTrips(allData.trips || []);
      setFriendsAdded(allData.friendsAdded || {});
      setOtherFriends(allData.otherFriends || {});
      setIsLoggedIn(true);

      // Calculate userFriends and pendingFriends
      const friends = [
        ...(Array.isArray(allData.friendsAdded)
          ? allData.friendsAdded
          : []
        ).filter((friend) => friend.status === "Accepted"),
        ...(Array.isArray(allData.otherFriends)
          ? allData.otherFriends
          : []
        ).filter((friend) => friend.status === "Accepted"),
      ];
      const pendingRequest = (
        Array.isArray(allData.otherFriends) ? allData.otherFriends : []
      ).filter((friend) => friend.status === "Pending");
      setUserFriends(friends);
      setPendingFriends(pendingRequest);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

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
      login,
      checkLoginStatus,
      logout,
      isLoggedIn,
      formatDate,
      team,
      setTeam,
      allTeams,
      setAllTeams,
    }),

    [
      user,
      userTrips,
      friendsAdded,
      otherFriends,
      userFriends,
      pendingFriends,
      successMessage,
      login,
      checkLoginStatus,
      logout,
      isLoggedIn,
      formatDate,
      team,
      setTeam,
      allTeams,
      setAllTeams,
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
