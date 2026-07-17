import React, { useState, useCallback } from 'react';
import terms from '@site/technical-term/terms.json';
import styles from './styles.module.css';

// ========== 弹窗 ==========
function TermModal({ term, onClose }) {
  if (!term) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="关闭"
        >
          ×
        </button>
        <h3 className={styles.title} style={{ color: term.color }}>
          {term.title}
        </h3>
        <div className={styles.content}>{term.content}</div>
      </div>
    </div>
  );
}

// ========== 术语链接 ==========
export function TermLink({ id, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const term = terms[id];

  const handleClick = useCallback((e) => {
    e.preventDefault();
    if (term) setIsOpen(true);
  }, [term]);

  // 如果术语库里没有，显示普通文本（带警告色）
  if (!term) {
    return <span className={styles.missing} title={`术语 "${id}" 未定义`}>{children}</span>;
  }

  return (
    <>
      <span
        className={styles.termLink}
        style={{ color: term.color }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      >
        {children}
      </span>
      {isOpen && <TermModal term={term} onClose={() => setIsOpen(false)} />}
    </>
  );
}
