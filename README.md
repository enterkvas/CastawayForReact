# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

======================================================================================================

15.11.25 сб 										Здесь будут мои заметки по проекту

1) после установки react-router-dom промпт для гпт по поводу: <span className="card-episodes__button button text-small">View Episode Details</span> (стоит ли эту бутафорскую кнопку делать компонентом?)
2) в EpisodesHeader переделать ссылку: a на Link

17.11.25 пнд		Сделал Episodes.module.scss Не перенес миксины и переменные в этот модуль. Если будут косяки, н.б. учесть.

18.11.25 вт 	EpisodesCard.jsx: подключение стилей: 
import styles from "./Episodes.module.scss"; ?
а м.б.: import styles from "./EpisodesCard.module.scss"; ?

Вставляю последний вариант 2 от гпт:
Episodes.jsx: ?:id="episodes"
EpisodesHeader.jsx: 1) id="episodes-title" 2) <AppButton />

22.11.25 сб 	Subscribe: 1) Заменил класс form-subscribe__form на класс form-subscribe__field 2) в стилях много значений в px 3) subscribe__text переименовал в subscribe__body