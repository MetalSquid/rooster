import React from "react";

class SearchRec extends React.Component {
    render() {
        return (
            <div className="ui search-rec">
                <form className="ui form">
                    <div className="field">
                        <label>Recipe Search</label>
                        <input type="text" name="recipe" placeholder="Recipe" />
                    </div>
                </form>
            </div>);
    }
}

export default SearchRec;