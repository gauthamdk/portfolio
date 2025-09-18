interface FileItemProps {
  permissions: string;
  size: string;
  date: string;
  name: string;
  type?: "file" | "directory" | "executable";
  href?: string;
  hideSizeOnMobile?: boolean;
}

export const FileItem = ({
  permissions,
  size,
  date,
  name,
  type = "file",
  href,
  hideSizeOnMobile = false,
}: FileItemProps) => {
  const content = (
    <div
      className={`file-listing flex items-center py-1 px-2 rounded transition-colors ${
        href
          ? "hover:bg-gray-800/30 cursor-pointer group"
          : "hover:bg-gray-800/20"
      }`}
    >
      <span className="file-perm">{permissions}</span>
      <span
        className={`file-size ${hideSizeOnMobile ? "hidden sm:inline" : ""}`}
      >
        {size}
      </span>
      <span className="file-date">{date}</span>
      <span
        className={`file-name ${type} ${
          href ? "group-hover:text-blue-400 transition-colors" : ""
        }`}
      >
        {name}
        {href && (
          <>
            <span className="ml-1 text-xs opacity-50 group-hover:opacity-100 transition-opacity">
              •
            </span>
            <span className="ml-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </>
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        title={`Open ${name} in new tab`}
      >
        {content}
      </a>
    );
  }

  return content;
};
