import create from 'zustand'

interface LanguageState {
  enLang: boolean
  changeLang: () => void
}

const useLangStore = create<LanguageState>()((set) => ({
  enLang: true,
  changeLang: () => set((state) => ({ enLang: !state.enLang })),
}))

export default useLangStore
