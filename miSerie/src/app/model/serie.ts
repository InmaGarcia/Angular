export interface Serie {
  name: string;
  language: string;
  genres: string[];
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
