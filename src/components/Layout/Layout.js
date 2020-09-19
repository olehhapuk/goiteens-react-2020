import React from 'react';

import './Layout.css';

export default function Layout({ title, children }) {
  return (
    <section className="Layout">
      <h2 className="Layout-title">{title}</h2>
      {children}
    </section>
  );
}
