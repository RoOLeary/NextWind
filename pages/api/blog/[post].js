
const fetchArticle = async (slug) => {
  const response = await fetch(`http://localhost:1337/articles?slug=${slug}`);
  const [article] = await response.json();
  return article;
};

export default async (req, res) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET': {
        const {
          query: { slug },
        } = req;

        const article = await fetchArticle(slug);
        res.statusCode = 200;

        res.json({
          data: {
            article,
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
