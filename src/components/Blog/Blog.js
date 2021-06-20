import React from 'react';
import PropTypes from 'prop-types';
import { useModalWithData } from '../../hooks/useModalWithData ';
import CustomModal from '../CustomModal';
import ArticleDetail from './ArticleDetail';
import ArticleList from './ArticleList'

const Blog = ({ articles }) => {
  const [
    setIsModalOpened,
    isModalOpened,
    modalData,
    setModalData
   ] = useModalWithData();

  return (
    <div>
      <div style={{ padding: '1rem' }} />
      <CustomModal
        title= "Edit user: "
        isActive={isModalOpened}
        handleClose={() => setIsModalOpened(false)}
      >
        {modalData && <ArticleDetail article={modalData} />}
      </CustomModal>

      <ArticleList
        articles={articles}
        setModalData={setModalData}
        setIsModalOpened={setIsModalOpened}
      />
    </div>
  );
};

Blog.propTypes = {
  articles: PropTypes.object.isRequired
};
export default Blog;