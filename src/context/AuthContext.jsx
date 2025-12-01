import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState([]);

  const login = async (email, password) => {
    setIsLoading(true);

    setTimeout(() => {
      setUser({
        id: 1,
        name: "Afaf User",
        email: email,
        avatar: "👤",
      });
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    setReservations([]);
  };

  const addReservation = (reservationData) => {
    const newReservation = {
      id: Date.now(), // Simple ID generation
      ...reservationData,
      bookingDate: new Date().toLocaleDateString(),
      status: "confirmed",
    };
    setReservations((prev) => [newReservation, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        reservations,
        addReservation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
