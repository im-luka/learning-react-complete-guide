import React, { useEffect } from "react";
import { Link, Route, useParams, useLocation, Routes } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const location = useLocation();
  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [params.quoteId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      {/* <Route exact path={`/quotes/${params.quoteId}`}> */}
      <Routes>
        <Route
          path={``}
          element={
            <div className="centered">
              <Link className="btn--flat" to={`${location.pathname}/comments`}>
                Load Comments
              </Link>
            </div>
          }
        />

        {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
        <Route path={`/comments`} element={<Comments />} />
      </Routes>
    </div>
  );
};

export default QuoteDetails;
