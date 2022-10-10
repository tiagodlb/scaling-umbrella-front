import useAsync from "../useAsync";
import * as service from "../../services/user";

export default function useLogin() {
  const { loading, act, error } = useAsync(service.authUser, false);

  return {
    loadingCreatingUser: loading,
    loginUser: act,
    loginUserError: error,
  };
}
