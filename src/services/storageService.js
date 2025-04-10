const STORAGE_KEY = 'git-contributors';

/**
 * Guarda los datos de los contribuidores en localStorage
 * @param {Array} contributors - Lista de contribuidores
 */
export const saveContributors = (contributors) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contributors));
    console.log('Contribuidores guardados:', contributors);
  } catch (error) {
    console.error('Error al guardar contribuidores:', error);
  }
};

/**
 * Carga los datos de los contribuidores desde localStorage
 * @returns {Array} Lista de contribuidores
 */
export const loadContributors = () => {
  try {
    const storedContributors = localStorage.getItem(STORAGE_KEY);
    const contributors = storedContributors ? JSON.parse(storedContributors) : [];
    console.log('Contribuidores cargados:', contributors);
    return contributors;
  } catch (error) {
    console.error('Error al cargar contribuidores:', error);
    return [];
  }
};

/**
 * Agrega un nuevo contribuidor
 * @param {Object} contributor - Datos del nuevo contribuidor
 * @param {Array} currentContributors - Lista actual de contribuidores
 * @returns {Array} Nueva lista de contribuidores
 */
export const addContributor = (contributor, currentContributors) => {
  const newContributors = [...currentContributors, contributor];
  saveContributors(newContributors);
  return newContributors;
};

/**
 * Elimina un contribuidor por su ID
 * @param {string} id - ID del contribuidor a eliminar
 * @param {Array} currentContributors - Lista actual de contribuidores
 * @returns {Array} Nueva lista de contribuidores
 */
export const removeContributor = (id, currentContributors) => {
  const newContributors = currentContributors.filter(c => c.id !== id);
  saveContributors(newContributors);
  return newContributors;
}; 