export default function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg__stars" />
      <div className="site-bg__blob site-bg__blob--a" />
      <div className="site-bg__blob site-bg__blob--b" />
      {Array.from({ length: 8 }).map((_, i) => (
        <span 
          key={i} 
          className={`site-bg__orb site-bg__orb--${i + 1}`} 
        />
      ))}
      <div className="site-bg__noise" />
      <div className="site-bg__vignette" />
    </div>
  );
}
