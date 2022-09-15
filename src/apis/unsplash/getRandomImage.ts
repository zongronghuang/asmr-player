// public types
export type RandomImage = {
  photographer: string;
  portfolio: string;
  source: string;
};

export const getRandomImage = async (
  searchTerm: string
): Promise<RandomImage> => {
  const RESOURCE_URL: string = `${process.env.REACT_APP_BASE_URL}photos/random?query=${searchTerm}&orientation=landscape`;
  const REQUEST_OPTIONS: RequestInit = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
  };

  return fetch(RESOURCE_URL, REQUEST_OPTIONS)
    .then((response) => {
      const { ok, statusText } = response;
      if (!ok) {
        throw new Error(statusText);
      }

      return response.json();
    })
    .then((data) => {
      const {
        urls: { regular: source },
        user: {
          name: photographer,
          links: { html: portfolio },
        },
      } = data;

      return {
        photographer,
        portfolio,
        source,
      };
    });
};
