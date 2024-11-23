import React from 'react';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div style={{ padding: 50, background: "linear-gradient(#012A47, #025793, #0266AD)"}}>
      <h1 style={{ fontSize: 48, textAlign: "center", color: "#fff", fontWeight: 800 }}>{title}</h1>
    </div>
  );
}

export default Header;
