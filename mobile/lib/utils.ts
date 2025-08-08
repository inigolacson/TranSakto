import { authClient } from "./auth-client";

export const handleOAuth = async (
  provider: string,
  callbackURL: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  await authClient.signIn.social({
    provider: provider,
    callbackURL,
    fetchOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    },
  });
};
