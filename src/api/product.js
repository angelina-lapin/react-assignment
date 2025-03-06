const API_URL = 'https://v2.api.noroff.dev/online-shop';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Ошибка при загрузке товара:', error);
    return null;
  }
};
