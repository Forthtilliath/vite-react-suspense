export const URLS = {
  Users: "https://jsonplaceholder.typicode.com/users/",
  Posts: "https://jsonplaceholder.typicode.com/posts/",
  Albums: "https://jsonplaceholder.typicode.com/albums/",
  Photos: "https://jsonplaceholder.typicode.com/photos",
} as const;

export type URL_KEYS = keyof typeof URLS;
