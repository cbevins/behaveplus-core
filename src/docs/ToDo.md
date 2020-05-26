# behaveplus-core To Do List

- Test Full GenomeArray as input to BpxDag

- Refactor genomeLister.js
  - accept an array of Nodes such as:
    - dag.node.map
    - dag.requiredNodes
  - only writes out the requested Nodes that are enabled
  - can be used to auto-generate submodels from a configured Dag!!!

- Create an examples/behaveplus that will also be in the 'test' project

- Why is the spot location initial value === null?

- Add file headers to all files

- FuelCatalog aliasMap([
  ['10', '10'],['fm10', '10'], ['ten', '10'],
])
