export const fetchBlob = async (uri: string) => {
  return await fetch(uri).then((response) => {
    if (!response.ok) {
      throw new Error("Error network");
    }
    return response.blob();
  });
};
