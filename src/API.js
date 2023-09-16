export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4M2ZmOTkzMy04NzI1LTQ5OWEtOGQxMS1iNGRmYjhjYTE2M2MiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5NDg4MzY5MCwiZXhwIjoxODUyNjcxNjkwfQ.KaOtbniHfnU95kUhQxuwqlWKt7hDZ9x5IpIML6U5Hc0";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
