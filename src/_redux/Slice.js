import create from "zustand";

const useStore = create((set) => ({
    examples: [],
    setExample: (examples) => set(() => ({ examples }))
}));

export default useStore;