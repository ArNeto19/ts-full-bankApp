export const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <p> Copyright ⓒ {thisYear}</p>
    </footer>)
};
