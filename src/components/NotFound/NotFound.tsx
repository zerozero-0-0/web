import "./NotFound.css";

export const NotFound = () => {
    return (
      <div className="notfound">
        <div className="notfound__content">
          The Response is
          <h2>404 NotFound</h2>
          存在しないページにアクセスしようとしているようです <br />
          It means you are trying to access a page that does not exist
        </div>
      </div>
    );
}