import MyToolCard from './components/toolCard/MyToolCard';

const MyInfoPage = () => {
  return (
    <>
      {' '}
      <MyToolCard
        toolLogo=""
        toolNameMain="ChatGPT"
        keyWordList={[
          { keyWordId: 3, keyWordName: '디자인' },
          { keyWordId: 4, keyWordName: '프로토타입' },
        ]}
      />
    </>
  );
};

export default MyInfoPage;
