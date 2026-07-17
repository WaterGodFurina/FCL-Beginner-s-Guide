// src/plugins/remarkTermPlugin.js
const { visit } = require('unist-util-visit');

function remarkTermPlugin() {
  return (tree) => {
    visit(tree, 'link', (node, index, parent) => {
      if (!node.url || !node.url.startsWith('window:')) return;

      // 解析 window:/term/colors.json#green
      const raw = node.url.replace(/^window:/, '');
      const hashIndex = raw.indexOf('#');
      
      let path, id;
      if (hashIndex === -1) {
        // 没写 #，整个当 path，id 从链接文本取（不推荐）
        path = raw;
        id = '';
      } else {
        path = raw.slice(0, hashIndex);
        id = raw.slice(hashIndex + 1);
      }

      // 提取链接文本
      const text = node.children
        .map(child => child.value || '')
        .join('');

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
