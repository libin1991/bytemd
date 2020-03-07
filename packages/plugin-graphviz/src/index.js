import GraphvizView from './GraphvizView.svelte';

export default {
  transformNode(node) {},
  shouldTransformElement(node) {
    return node.type === 'code' && ['graphviz', 'dot'].includes(node.lang);
  },
  component: GraphvizView
};
