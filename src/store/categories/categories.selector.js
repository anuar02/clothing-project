import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => {
    return categorySlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((accum, category) => {
      const { title, items } = category;
      accum[title.toLowerCase()] = items;
      return accum;
    }, {});
  }
);
