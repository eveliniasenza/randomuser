import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa'
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function ArticleList ({ articles, setModalData, setIsModalOpened }){
    const [searchTerm, setSearchTerm] = useState("");

    var firstName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var city = localStorage.getItem("city");
    var country = localStorage.getItem("country");


    return (
        <div className="container">
            <div className="search-container">
                <div id="search">
                    <input
                        type="search"
                        placeholder=" Search by name...  🔍"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    <br />
                </div>
            </div>
            <div className="card-container">
                {articles.filter((item) => {
                    if (searchTerm === "") {
                        return item.name.first;
                    } else if (
                        item.name.first.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return item.name.first;
                    } else {
                        return null;
                    }
                })
                    .map(article => {
                        const { id , title } = article;
                        return (
                            <div key={`article--${id}`}>
                         {title}
                        
                        <div className="card">
                        <button onClick={ () => { setModalData(article); setIsModalOpened(true);}} id="btn-edit"><FaUserEdit color="#fff" size="1.5em" /></button>
                            <p key={article.objectID}>
                                <h1 className="name">{article.name.first} {article.name.last} </h1>
                                <img id="img-circle" src={article.picture.large} />
                                <p className="texts">{article.email}</p>
                                <p className="texts">{article.phone}</p>
                                <p className="texts">{article.location.city}, {article.location.country}</p>
                            </p>
                        </div>
                        </div>
                    )})}
            </div>
        </div>
    );
}

ArticleList.propTypes = {
    articles : PropTypes.array,
    setModalData: PropTypes.func.isRequired,
    setIsModalOpened: PropTypes.func.isRequired
}

export default ArticleList;


