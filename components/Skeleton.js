export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="s-heading"></div>
      <div className="s-date"></div>
      <div className="s-image"></div>
      <div className="s-content"></div>

      <style jsx>{`
        .skeleton {
          max-width: 1200px;
          margin: 20px auto;
        }
        .skeleton > div {
          background: #ccc;
          border-radius: 4px;
        }
        .s-heading {
          height: 33px;
        }
        .s-date {
          height: 18px;
          margin-top: 3px;
          padding: 2px 0;
          max-width: 200px;
        }
        .s-image {
          margin: 1rem auto;
          width: 400px;
          height: 200px;
        }
        .s-content {
          padding: 8px 0;
          max-width: 1000px;
        }
      `}</style>
    </div>
  );
}
