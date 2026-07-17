const { visit } = require('unist-util-visit');

function remarkTermPlugin() {
  return (tree) => {
    visit(tree, 'link', (node, index, parent) => {
      if (!node.url || !node.url.startsWith('window:')) return;

      const id = node.url.replace('window:', '').trim();
      
      // 提取链接文本（兼容纯文本和加粗等简单格式）
      const text = node.children
        .map(child => child.value || '')
        .join('');

      // MDX v3 内联 JSX 节点 —— 这是重点！
      const jsxNode = {
        type: 'mdxJsxTextElement',
        name: 'TermLink',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'id', value: id },
        ],
        children: [{ type: 'text', value: text }],
      };

      parent.children.splice(index, 1, jsxNode);
      return index; // 替换后继续遍历
    });
  };
}

module.exports = remarkTermPlugin;
