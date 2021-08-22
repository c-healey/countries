import React, { useContext, useEffect } from "react";
import axios from "axios";

import { WidgetContext, SEARCH, SEARCH_TEXT } from "../../contexts/WidgetsContext";
import Text from "../widgets/Text";

const Search = () => {
  const [results, setResults, debounceTerm] = useContext(WidgetContext)[SEARCH];

  
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        },
      });
      setResults(data.query.search);
    };

    if (debounceTerm.length) {
      search();
    }
  }, [debounceTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Text label="Enter Search Term" context={SEARCH_TEXT} placeholder="" />

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
