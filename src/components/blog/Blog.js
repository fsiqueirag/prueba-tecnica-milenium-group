import React from 'react';
import blogAuthor1 from '../../assets/images/blog-author-1.png';
import blogAuthor2 from '../../assets/images/blog-author-2.png';
import blogAuthor3 from '../../assets/images/blog-author-3.png';

export const Blog = () => {
    return (
        <section className="blog__section" id="blog">
            <div className="blog__container container-fluid">
                <div className="blog__title-container">
                    <span className="blog__subtitle">FROM OUR BLOG</span>
                    <h2 className="blog__title">Get latest update</h2>
                    <button>
                        Go to Blog
                    </button>
                </div>

                <div className="blog__posts-container row">
                    <div className=" col-md-6 col-lg-4 blog__post-outer-container">
                        <div className="blog__post-container">
                            <p className="blog__post-category blog__post-category-1">App Development</p>
                            <h3>When the musics over turn off the light</h3>
                            <p  className="blog__post-content">
                                Excep teur sint occae cat cupid atat non proident, sunt in culpa qui officia deser unt mollit ..
                            </p>
                            <div className="blog__post-author-container">
                                <img src={blogAuthor1} alt="author"/>
                                <p className="blog__post-author">Sharmin Eity</p>
                                <span><i className="far fa-heart"></i>22</span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 blog__post-outer-container">
                        <div className="blog__post-container">
                            <p className="blog__post-category blog__post-category-2">Desgin</p>
                            <h3>When the musics over turn off the light</h3>
                            <p  className="blog__post-content">
                                Excep teur sint occae cat cupid atat non proident, sunt in culpa qui officia deser unt mollit ..
                            </p>
                            <div className="blog__post-author-container">
                                <img src={blogAuthor2} alt="author"/>
                                <p className="blog__post-author">Sanjida Ema</p>
                                <span><i className="far fa-heart"></i>22</span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 blog__post-outer-container">
                        <div className="blog__post-container">
                            <p className="blog__post-category blog__post-category-3">Research</p>
                            <h3>When the musics over turn off the light</h3>
                            <p  className="blog__post-content">
                                Excep teur sint occae cat cupid atat non proident, sunt in culpa qui officia deser unt mollit ..
                            </p>
                            <div className="blog__post-author-container">
                                <img src={blogAuthor3} alt="author"/>
                                <p className="blog__post-author">Nayna Eva</p>
                                <span><i className="far fa-heart"></i>22</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
