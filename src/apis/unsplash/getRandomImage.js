export const getRandomImage = async (searchTerm) => {
  const RESOURCE_URL = `${process.env.REACT_APP_BASE_URL}photos/random?query=${searchTerm}&orientation=landscape`;
  const REQUEST_OPTIONS = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
  };

  try {
    const response = await fetch(RESOURCE_URL, REQUEST_OPTIONS);
    const { ok, statusText } = response;
    if (!ok) {
      throw new Error(statusText);
    }
    const imageData = await response.json();
    // console.log('Fetched image data', imageData)
    const {
      urls: { regular: source },
      user: {
        name: photographer,
        links: { html: portfolio },
      },
    } = imageData;

    return {
      photographer,
      portfolio,
      source,
    };
  } catch (error) {
    console.error("[Unsplash API Error]", error);
    return;
  }
};
