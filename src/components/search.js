import React from "react";

class AddSearch extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <form className="ui form">
                    <div className="field">
                        <label>Recipe Search</label>
                        <input type="text" name="recipe" placeholder="Recipe" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddSearch;



