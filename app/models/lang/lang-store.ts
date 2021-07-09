import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { I18nModel, I18nSnapshot } from "./lang"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty Lang
 */
export const LangStoreModel = types
  .model("I18nStore")
  .props({
    i18n: types.optional(I18nModel, {}),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveI18n: (i18nSnapshot: I18nSnapshot) => {
      self.i18n = i18nSnapshot
    },
  }))
  .actions((self) => ({
    getI18n: async () => {
      return self.i18n
    },
  }))

type LangStoreType = Instance<typeof LangStoreModel>
export interface LangStore extends LangStoreType {}
type LangStoreSnapshotType = SnapshotOut<typeof LangStoreModel>
export interface LangStoreSnapshot extends LangStoreSnapshotType {}
export const createLangStoreDefaultModel = () => types.optional(LangStoreModel, {})
