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
    <div className="file-listing flex items-center py-1 hover:bg-gray-800/30 px-2 rounded transition-colors">
      <span className="file-perm">{permissions}</span>
      <span
        className={`file-size ${hideSizeOnMobile ? "hidden sm:inline" : ""}`}
      >
        {size}
      </span>
      <span className="file-date">{date}</span>
      <span className={`file-name ${type}`}>{name}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};
