import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Rick and Morty Lang model.
 */
export const I18nModel = types.model("I18n").props({
  locale: types.maybe(types.string)
})

type I18nType = Instance<typeof I18nModel>
export interface I18n extends I18nType {}
type I18nSnapshotType = SnapshotOut<typeof I18nModel>
export interface I18nSnapshot extends I18nSnapshotType {}
export const createI18nDefaultModel = () => types.optional(I18nModel, {})
