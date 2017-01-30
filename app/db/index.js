import Dexie from 'dexie';

let db;

class DB {
  constructor() {
    db = new Dexie('galanews_4');
    db.version(1).stores({
      sources: 'id, name, category, language, logoSmall, logoMedium, logoLarge',
      articles: '++id, author, description, title, &url, urlToImage, publishedAt, read, later, sourceLogoLarge, sourceLogoMedium, sourceLogoSmall'
    });
    db.open().catch((e) => {
      console.error(e);
    })
  }

  getSources() {
    return db.sources.toArray();
  }

  getArticles() {
    return db.articles.toArray();
  }

  cleanSources() {
    return db.sources.orderBy('publishedAt').clear()
  }

  saveArticles(list) {
    // I'm not using a transaction because if I'm trying to add duplicate I just ignore it
    const bulk = list.toJSON().map((article) => {
      return {
        author: article.author,
        description: article.description,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        read: false,
        later: false,
        sourceLogoLarge: article.source.logoLarge,
        sourceLogoMedium: article.source.logoMedium,
        sourceLogoSmall: article.source.logoSmall,
      };
    });

    return db.articles.bulkAdd(bulk)
      .catch((err) => {
        console.log('Yes there is some errors but I dont care');

        return null;
      });
  }

  setArticle(id, options) {
    return db.transaction('rw', db.articles, () => {
      return db.articles
        .where('id')
        .equal(id)
        .modify(options);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  saveSources(list) {
    return db.sources.clear()
      .then(() => {
        return db.transaction('rw', db.sources, () => {
          const bulk = list.toJSON().map((source) => {
            return {
              id: source.id,
              name: source.name,
              category: source.category,
              language: source.language,
              logoSmall: source.urlsToLogos.small,
              logoMedium: source.urlsToLogos.medium,
              logoLarge: source.urlsToLogos.large,
            };
          });
          return db.sources.bulkAdd(bulk);
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default new DB();
