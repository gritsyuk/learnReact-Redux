import React from 'react';
const Header = () => {
    return (
    <section className="search-and-user">
        <form>
        <input type="search" placeholder="Search Pages..."/>
        <button type="submit" ariaLabel="submit form">
            <svg ariaHidden="true">
            <use xlinkHref="#search"></use>
            </svg>
        </button>
        </form>
        <div className="admin-profile">
            <span className="greeting">Hello admin</span>
            <div className="notifications">
                <span className="badge">1</span>
                <svg>
                <use xlinkHref="#users"></use>
                </svg>
            </div>
        </div>
    </section>
        );
  }
export default Header;