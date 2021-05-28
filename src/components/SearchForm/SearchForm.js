import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <div className="search__box">
            <form className="search__form">
                <fieldset className="search__form-fields">
                    <input type="text" placeholder="Фильм" className="search__form-input" required/>
                </fieldset>   
            </form>
            <button className="search__form-button" type="submit"></button>
            </div>
            <div className="search__toggle-box">
                <FilterCheckbox />
                <h3 className="search__toggle-text">Короткометражки</h3>
             </div>
            
                
                
        </section>
    )
}

export default SearchForm;