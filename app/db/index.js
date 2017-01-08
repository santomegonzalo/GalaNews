import Dexie from 'dexie';

let db;

class DB {
  constructor() {
    db = new Dexie('galanews');
    db.version(1).stores({
      sources: 'id, name, category, language, logoSmall, logoMedium, logoLarge',
      articles: 'id, author, description, title, url, urlToImage, publishedAt, read'
    });
    db.open().catch((e) => {
      console.error(e);
    })
  }

  getSources() {
    return db.sources.toArray();
  }

  cleanSources() {
    return db.sources.clear()
  }

  saveSources(list) {
    return db.sources.clear()
      .then(() => {
        return db.transaction('rw', db.sources, () => {
          const bulk = list.toJS().map((source) => {
            return {
              id: source.id,
              name: source.name,
              category: source.category,
              language: source.language,
              logoSmall: source.urlsToLogos.small,
              logoMedium: source.urlsToLogos.medium,
              logoLarge: source.urlsToLogos.large
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
