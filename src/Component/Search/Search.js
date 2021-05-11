import React from 'react';
import styles from './Search.module.css';

const Search = (props) => {

    function SearchResult(){
        let result = document.getElementById('form1').value;
        return props.search(result);
    }

    return (
        // <div className="input-group">
        //     <div className="form-outline">
        //         <input onKeyUp={SearchResult} type="search" id="form1" className="form-control" />
        //         <label className="form-label">Search</label>
        //     </div>
        // </div>
        <div className="form-group has-search">
            <span className={"fa fa-search " + styles.formControlFeedback}></span>
            <input onKeyUp={SearchResult} id="form1" type="text" className={styles.formControl} placeholder="Search"/>
        </div>

    );
}

export default Search;
