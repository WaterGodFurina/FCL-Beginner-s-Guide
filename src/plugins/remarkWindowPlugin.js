const { visit } = require('unist-util-visit');

function remarkTermPlugin() {
  return (tree) => {
    visit(tree, 'link', (node, index, parent) => {
      if (!node.url || !node.url.startsWith('window:')) return;

      // 解析 window:术语ID:/term/xxx.json
      const raw = node.url.replace(/^window:/, '');
      const colonIndex = raw.indexOf(':');
      if (colonIndex === -1) return; // 格式不对，不处理

      const id = raw.slice(0, colonIndex);
      const path = raw.slice(colonIndex + 1);

      // 提取链接文本
      const text = node.children
        .map(child => child.value || '')
        .join('');

      // MDX v3 内联 JSX 节点
      const jsxNode = {
        type: 'mdxJsxTextElement',
        name: 'TermLink',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'id', value: id },
          { type: 'mdxJsxAttribute', name: 'path', value: path },
        ],
        children: [{ type: 'text', value: text }],
      };

      parent.children.splice(index, 1, jsxNode);
      return index;
    });
  };
}

module.exports = remarkTermPlugin;
