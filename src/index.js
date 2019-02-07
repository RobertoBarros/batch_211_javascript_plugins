import { searchMovie, updateResultList } from './movies';
import {initSortable} from './plugins/init_sortable';
import {initMarkdown} from './plugins/init_markdown';
import {initSelect2} from './plugins/init_select2';

initSelect2();

initMarkdown();


const searchForm = document.getElementById('search-form');

searchMovie('star wars');
initSortable();

searchForm.addEventListener('submit', updateResultList);


