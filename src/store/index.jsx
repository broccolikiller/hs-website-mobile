import create from 'zustand'
export const useTabIndexStore = create((setState) => ({
    solutionTabIndex: 0,
    homeClassicCaseTabIndex: 0,
    classicCaseTabIndex: '1',
    changeSolutionTabIndex: (id) => setState((state) => ({solutionTabIndex: id})),
    changeHomeClassicCaseTabIndex: (id) => setState((state) => ({homeClassicCaseTabIndex: id})),
    changeClassicCaseTabIndex: (id) => setState((state) => ({classicCaseTabIndex: id}))
}))