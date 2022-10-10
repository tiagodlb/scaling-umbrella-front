import useAsync from "../useAsync";
import * as service from "../../services/user";

export default function useCreateUser() {
  const { loading, act, error } = useAsync(service.postUser, false);

  return {
    loadingCreatingUser: loading,
    createUser: act,
    creatingUserError: error,
  };
}