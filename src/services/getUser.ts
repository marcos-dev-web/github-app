import axios from "axios";

import { User } from "../types";

type Return = {
  error: null | string;
  data?: User;
};

export async function getUser(username: string): Promise<Return> {
  try {
    const result = await axios.get<User>(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    return {
      error: null,
      data: result.data,
    };
  } catch (err) {
    return {
      error: String(err),
    };
  }
}
