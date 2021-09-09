import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CategoryModel, CategorySnapshot } from "../category/category"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Model description here for TypeScript hints.
 */
export const CategoryStoreModel = types
  .model("CategoryStore")
  .props({
    categories: types.optional(types.array(CategoryModel), []),
  })
  .extend(withEnvironment)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveCategories: (categorySnapshots: CategorySnapshot[]) => {
      self.categories.replace(categorySnapshots)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    getCategories: async () => {

      // if (result.kind === "ok") {
        self.saveCategories([
          {icon: 'https://image.yfsassets.com/fit-in/76x76/origin/event/5f0e7a24dee7b.png', title: 'Licensed Characters'},
          {icon: 'https://image.yfsassets.com/fit-in/76x76/origin/event/60a8547337738.png', title: 'Shoes & Accessories'},
          {icon: 'https://image.yfsassets.com/fit-in/76x76/origin/event/5f8818d9965bc.png', title: 'Maternity'},
          {icon: 'https://image.yfsassets.com/fit-in/76x76/origin/event/5ef9b3964d59a.png', title: 'Cozy At Home'},
          {icon: 'https://image.yfsassets.com/fit-in/76x76/origin/event/5f881942342f2.png', title: 'Sale'},
          {icon: 'https://image.yfsassets.com/fit-in/76x76/origin/event/5ef95b8ee5665.png', title: 'Matching Outfits'},
        ])
      // } else {
      //   __DEV__ && console.tron.log(result.kind)
      // }
    },
  }))

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type CategoryStoreType = Instance<typeof CategoryStoreModel>
export interface CategoryStore extends CategoryStoreType {}
type CategoryStoreSnapshotType = SnapshotOut<typeof CategoryStoreModel>
export interface CategoryStoreSnapshot extends CategoryStoreSnapshotType {}
export const createCategoryStoreDefaultModel = () => types.optional(CategoryStoreModel, {})
