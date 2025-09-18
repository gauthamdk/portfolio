export const Footer = () => {
  return (
    <footer className="border-t border-gray-700 pt-6 text-center text-sm text-[var(--terminal-muted)]">
      <div>© 2025 Gautham Dinesh. All rights reserved.</div>
      <div className="mt-2">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </div>
    </footer>
  );
};
