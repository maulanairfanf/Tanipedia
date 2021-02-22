import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { removeUserSession } from "../../Utils/Common";
import { getToken } from "../../Utils/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
export const Logout = () => {
  const [error, setError] = useState("");

  const history = useHistory();
  const token = getToken();

  async function handleLogout() {
    try {
      removeUserSession();
      if (!token) {
        window.location.reload();
        history.push("/login");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }
  return (
    <>
      {error && (
        <div
          className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-lg mb-3"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      <Button color="info" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Button>
    </>
  );
};

export default Logout;
