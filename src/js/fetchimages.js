import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '34288902-13701de51ab67ccd3010f5c4f';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}
