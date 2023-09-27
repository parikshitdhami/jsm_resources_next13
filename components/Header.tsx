import React from "react";

interface Props {
  query: string;
  category: string;
}
const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <div className="heading3 self-start text-white-800">
        Search results for "{query}" in <span className="capitalize">{category}</span> 
      </div>
    );
  }
  if(query){
    return (
        <div className="heading3 self-start text-white-800">
          Search results for "{query}"
        </div>
      );
  }
  if(category){
    return (
        <div className="heading3 self-start text-white-800">
          <span className="capitalize">{category}</span> 
        </div>
      );
  }
  return(
    <h1 className="heading3 self-start text-white-800">No results</h1>
  )
};

export default Header;
