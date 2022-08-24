import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface LanguageState {
  enLang: boolean
  changeLang: () => void
}

const useLangStore = create<LanguageState>()(
  devtools(
    persist(
      (set) => ({
        enLang: true,
        changeLang: () => set((state) => ({ enLang: !state.enLang })),
      }),
      {
        name: 'language-storage',
      }
    )
  )
)

export default useLangStore
