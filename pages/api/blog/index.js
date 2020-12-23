const fetchLatestArticles = async () => {
  const response = await fetch('https://localhost:1337/articles');
  return await response.json();
};

export default async (req, res) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET': {
        const {
          query: { slug },
        } = req;

        const latestArticles = await fetchLatestArticles();
        res.statusCode = 200;

        res.json({
          data: {
            latestArticles
          },
        });
        break;
      }
      default: {
        res.statusCode = 405;
        res.json(null);
        break;
      }
    }
  } catch (e) {
    console.warn(e);
    res.statusCode = 500;
    res.json(null);
  }
};
