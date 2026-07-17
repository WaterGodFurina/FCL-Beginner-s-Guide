import React, { useState, useCallback } from 'react';
import { useDocusaurusContext } from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

// 全局缓存：path -> jsonData
const jsonCache = new Map();

// ========== 弹窗 ==========
function TermModal({ term, loading, error, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="关闭">×</button>

        {loading && <div className={styles.loading}>加载中...</div>}

        {error && (
          <div className={styles.error}>
            <strong>加载失败</strong>
            <p>{error}</p>
          </div>
        )}

        {term && !loading && !error && (
          <>
            <h3 className={styles.title} style={{ color: term.color || 'inherit' }}>
              {term.title || term.id}
            </h3>
            <div 
              className={styles.content} 
              dangerouslySetInnerHTML={{ __html: term.content }}
            />
          </>
        )}
      </div>
    </div>
  );
}

// ========== 术语链接 ==========
export function TermLink({ id, path, children }) {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = useCallback(async (e) => {
    e.preventDefault();
    if (isOpen) return;

    setIsOpen(true);
    setLoading(true);
    setError(null);

    try {
      let data = jsonCache.get(path);

      if (!data) {
        // 拼接 baseUrl，处理 / 结尾
        const fullPath = `${baseUrl.replace(/\/$/, '')}${path}`;
        const res = await fetch(fullPath);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        data = await res.json();
        jsonCache.set(path, data);
      }

      const found = data[id];
      if (!found) throw new Error(`术语 "${id}" 在 ${path} 中未找到`);

      setTerm(found);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id, path, baseUrl, isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTerm(null);
    setError(null);
  }, []);

  return (
    <>
      <span
        className={styles.termLink}
        style={{ color: term?.color }}  // 加载后变色，加载前用默认
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      >
        {children}
      </span>
      {isOpen && (
        <TermModal
          term={term}
          loading={loading}
          error={error}
          onClose={handleClose}
        />
      )}
    </>
  );
}
