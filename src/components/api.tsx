export const fetchRandomUser = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=10`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error('Something went wrong. Please try again.');
    }
  };
  